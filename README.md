This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## ⚡ Internal CMS & Customization

**New!** Manage all your site's content from a single file without touching technical code.

1.  **Edit Content**: Open `src/content/site-data.ts`.
2.  **Update Images/Icons**: Just change the text strings (e.g., "Zap" for lightning icon).
3.  **Detailed Guide**: Read `EDIT_HERE.md` for a full walkthrough on customizing texts, pricing, features, and SEO.

## 🚀 10 Profitable Niche Ideas
Check `IDEAS.md` for 10 proven ways to monetize this template immediately (Lawyers, Real Estate, Dentists, etc.).

## 🎨 Changing Themes (Template Instructions)

This template comes with 5 pre-built themes. To switch between them:

1.  Open `src/app/layout.tsx`.
2.  Find the `<body className="...">` tag.
3.  Replace `theme-modern` with one of:
    *   `theme-swiss`
    *   `theme-cyberpunk`
    *   `theme-neopop`
    *   `theme-vintage`

No CSS knowledge required!

## 🧹 Theme Cleanup (Optimization)
Once you have decided on a final theme and want to deploy, you can remove all unused themes to keep your CSS file small and clean.

**WARNING: This is a permanent action.**

To run the cleanup tool:
```bash
npm run purge-themes
```
Follow the prompt to select the theme you want to **KEEP** (e.g., `theme-modern`). The script will automatically delete all other theme styles from `globals.css`.

