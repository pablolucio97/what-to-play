
import React from 'react';
import Document, { Html, NextScript, Main, Head } from 'next/document'

export default class MyDocument extends Document {


  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
              <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600&family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
              </Head>
              <body>
                <Main />
                <NextScript />
              </body>
            </Html>
            )
  }
}