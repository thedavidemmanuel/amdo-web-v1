// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Standard meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="The Amdo Initiative - Empowering our community by developing its people, creating opportunities, and building lasting solutions." />
        <meta name="keywords" content="Amdo Initiative, community development, empowerment, education, opportunities" />

        {/* Open Graph meta tags for social sharing */}
        <meta property="og:title" content="The Amdo Initiative" />
        <meta property="og:description" content="Empowering our community by developing its people, creating opportunities, and building lasting solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.amdoinitiative.org" /> {/* Replace with your actual URL */}
        <meta property="og:image" content="https://www.amdoinitiative.org/og-image.jpg" /> {/* Replace with your actual image URL */}

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Amdo Initiative" />
        <meta name="twitter:description" content="Empowering our community by developing its people, creating opportunities, and building lasting solutions." />
        <meta name="twitter:image" content="https://www.amdoinitiative.org/twitter-image.jpg" /> {/* Replace with your actual image URL */}

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}