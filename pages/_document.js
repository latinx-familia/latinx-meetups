import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
class WebDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Worldwide community meetups for latinx VC investors and startup founders. Join the movement 👊🔥" />
          
          <title>Latinx Meetups</title>

          <meta property="og:url" content="https://latinxmeetups.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Latinx Meetups" />
          <meta property="og:description" content="Worldwide community meetups for latinx VC investors and startup founders. Join the movement 👊🔥" />
          <meta property="og:image" content="/img/logo.png" />
          
          <Script id="google-tag-manager" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PV2RL6N2');`}}></Script>
        </Head>
        <body>
            <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXX"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default WebDocument