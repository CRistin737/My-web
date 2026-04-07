"use client";

import Script from "next/script";

const GTM_ID = "GTM-PDKKVX4Q";
const GA4_ID = "G-LCKZCL2DZS";

export const GoogleAnalytics = () => {
    return (
        <>
            {/* Google Tag Manager */}
            <Script id="gtm" strategy="afterInteractive">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>

            {/* Google Analytics 4 (gtag.js) */}
            <Script
                id="ga4-loader"
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            />
            <Script id="ga4-init" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');`}
            </Script>
        </>
    );
};

export const GTMNoScript = () => (
    <noscript>
        <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
        />
    </noscript>
);
