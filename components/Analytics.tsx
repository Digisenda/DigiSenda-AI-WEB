'use client';

import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

// GA4/Pixel IDs read from env, never hardcoded — unlike the reference
// implementation in digisenda-tax-services, whose IDs are literals in
// layout.tsx and can't be varied per environment (prod vs. preview).
export default function Analytics() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

    return (
        <>
            {gaId && <GoogleAnalytics gaId={gaId} />}
            {pixelId && (
                <Script id="meta-pixel" strategy="afterInteractive">
                    {`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '${pixelId}');
                        fbq('track', 'PageView');
                    `}
                </Script>
            )}
        </>
    );
}
