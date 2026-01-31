const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Config
const CSS_PATH = path.join(__dirname, '../src/app/globals.css');
const AVAILABLE_THEMES = ['theme-modern', 'theme-swiss', 'theme-cyberpunk', 'theme-neopop', 'theme-vintage'];

// Setup Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\n🎨 MASTER CHAMELEON THEME PURGER");
console.log("===================================");
console.log("This script will permanently remove unused themes from your CSS.");
console.log("Available themes: " + AVAILABLE_THEMES.join(', '));

rl.question('\nWhich theme do you want to KEEP? (e.g. theme-modern): ', (selectedTheme) => {

    if (!AVAILABLE_THEMES.includes(selectedTheme)) {
        console.error(`\n❌ Error: '${selectedTheme}' is not a valid theme.`);
        console.log("Valid options: " + AVAILABLE_THEMES.join(', '));
        rl.close();
        process.exit(1);
    }

    console.log(`\nOK! Keeping '${selectedTheme}' and removing the rest...`);

    try {
        let cssContent = fs.readFileSync(CSS_PATH, 'utf8');

        // Logic: Identify blocks for other themes and remove them.
        // This regex looks for start of a theme block and tries to find where it ends or next one begins.
        // Since our CSS is structured with headers like "/* THEME X: ... */", we can split by that.

        // Instead of regex hell, let's do a smarter approach:
        // 1. Split the file into segments based on the Theme Headers.
        // 2. Keep the Header (Base) and the Selected Theme.
        // 3. Discard others.

        // Define delimiters
        const themeDelimiters = {
            'theme-modern': 'THEME 1: MODERN',
            'theme-swiss': 'THEME 2: SWISS',
            'theme-cyberpunk': 'THEME 3: CYBERPUNK',
            'theme-neopop': 'THEME 4: NEO-POP',
            'theme-vintage': 'THEME 5: VINTAGE'
        };

        // We assume the file has comments like "/* === THEME X: ... === */"
        // Let's create a robust regex ensuring we capture the block.
        // Actually, given the complexity, let's warn the user to backup.

        // Simplification: We will just search for the specific class blocks of UNWANTED themes and replace them with empty strings.
        // CSS blocks start with `body.theme-name` and go until the next big comment or end of file.

        AVAILABLE_THEMES.forEach(theme => {
            if (theme !== selectedTheme) {
                console.log(`- Removing ${theme}...`);

                // Regex to match:
                // 1. The divider comment (optional but good to remove)
                // 2. The body.theme-name block(s)

                // Strategy: Match the Header Comment for the theme, and everything until the NEXT header comment.
                // This relies on the strict formatting we put in globals.css.

                const key = themeDelimiters[theme];
                // Regex explanation:
                // \/\* = start comment
                // [\s\S]*? = match anything lazily
                // key = the specific theme title
                // [\s\S]*? = match anything inside comment
                // \*\/ = end comment
                // [\s\S]*? = match the actual CSS content
                // (?= \/\* === THEME|$) = Lookahead for the START of the next theme OR end of file.

                const regexString = `\\/\\*([^*]|[\\r\\n]|(\\*+([^*/]|[\\r\\n])))*${key}([^*]|[\\r\\n]|(\\*+([^*/]|[\\r\\n])))*\\*\\/[\\s\\S]*?(?=\\/\\* =+ THEME|$)`;
                const regex = new RegExp(regexString, 'g');

                // Also simpler: remove just the `body.theme-X ... }` blocks? No, we need variables and media queries.
                // The Header-delimiter strategy is safest for this file structure.

                cssContent = cssContent.replace(regex, '');
            }
        });

        // Write back
        fs.writeFileSync(CSS_PATH, cssContent.trim() + '\n');

        console.log("\n✅ Done! Your globals.css is now clean.");
        console.log(`\nTo revert, hopefully you have git! 'git checkout src/app/globals.css'`);

    } catch (err) {
        console.error("Error reading/writing file:", err);
    }

    rl.close();
});
