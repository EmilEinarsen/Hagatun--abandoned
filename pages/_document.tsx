import Document, { Html, Main, NextScript, Head } from 'next/document'
import CSSReset from '@chakra-ui/css-reset'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
				<Head>
					<link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=optional"
            rel="stylesheet"
          />
					<link
            href="https://fonts.googleapis.com/css2?family=Merriweather&display=optional"
            rel="stylesheet"
          />
				</Head>
        <body>
					<CSSReset />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument