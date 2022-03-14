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
import colors from "./foundations/colors"
import radii from "./foundations/radii"


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
	colors,
	radii
} as ThemeOverride


export default extendTheme(overrides)
