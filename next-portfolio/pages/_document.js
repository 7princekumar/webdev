import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewports" content="width=device-width" />
          <meta name="description" content="A site for my programming portfolio"/>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" 
                rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
        </Head>

        <body>
          <Main/>
          <NextScript/>
        </body>

        <style global jsx>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
      </html>
    );
  }
}