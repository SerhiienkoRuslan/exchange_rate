import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{
        height: "100vh",
        backgroundImage: 'url(/bg.gif)',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
