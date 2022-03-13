import { extendTheme, ThemeOverride } from "@chakra-ui/react"

// Global style overrides
import styles from "./styles"


// Foundational style overrides


// Component style overrides
import Heading from "./components/heading"
import Text from "./components/text"
import Divider from "./components/divider"
import Link from "./components/link"
import Button from "./components/button"


const overrides = {
	config: {
    cssVarPrefix: ""
  },
	fonts: {
    heading: 'Merriweather, Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  styles,
  components: {
    Heading,
		Text,
		Divider,
		Link,
		Button,
  },
	colors: {
		primary: {
			600: '#5071CB'
		}
	}
} as ThemeOverride


export default extendTheme(overrides)
