"use client";

import Script from "next/script";

export default function GoogleScripts() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16885861325"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16885861325');
        `}
      </Script>

      {/* LinkedIn Insight Tag */}
      <Script id="linkedin-insight" strategy="lazyOnload">
        {`
          window._linkedin_partner_id = "7054860";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
      </Script>
      <Script
        src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
        strategy="lazyOnload"
      />
    </>
  );
}
