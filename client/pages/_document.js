import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
      <Html lang="en">
          <Head/>
          <meta property="twitter:image" content="https://ring.jiale0709.eu.org/og.png"/>
          <meta property="twitter:title" content="Jia Le's Ring"/>
          <meta property="og:site_name" content="Jia Le's Ring"/>
          <meta property="twitter:description" content="Jia Le's Ring"/>
          <meta property="description" name={'description'} content="Jia Le's Ring"/>
          <meta property="og:title" content="Jia Le's Ring"/>
          <meta property="og:image" content="https://ring.jiale0709.eu.org/og.png"/>
          <meta property="og:site_name" content="Jia Le's Ring"/>
          <meta property="og:description" content="Jia Le's Ring"/>
          <meta property="og:url" content="https://ring.jiale0709.eu.org"/>
          <title>{"Jia Le's Ring"}</title>
          <body className="antialiased">
          <Main/>
          <NextScript/>
          </body>
      </Html>
  );
}
