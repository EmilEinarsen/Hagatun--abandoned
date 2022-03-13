import { Box, List, ListItem } from '@chakra-ui/layout'
import { Text, TextProps, IconButton, Button } from '@chakra-ui/react'
import { Heading } from 'components/core/Heading'

import { Link } from 'components/core/Link'
import { HamburgerIcon } from 'components/icons/HamburgerIcon'
import { LogoIcon } from 'components/icons/LogoIcon'

export const Item: React.FC<TextProps & { isDrawer?: boolean }> = ({ isDrawer, ...props }) => 
	<ListItem>
		<Text
			{...props}
			{...isDrawer?{display:'flex', justifyContent: 'center'}:null}
		/>
	</ListItem>

/**
 * This component is meant to be used in conjunction with `MobileMenu`.
 * `MobileMenu` should be dynamically imported to reduce JS bundle-size and increase performance.
 * 
 * Uses media queries to fake `MobileMenu`'s appearance while reducing CLS until it's dynamically imported and CSR swapped
 */
export const Menu = () => 
	<>
		<Link href="/" aria-label="Go to homepage" exact display="flex" alignItems="center">
			<LogoIcon fontSize="7xl" color="#C3A94D" />
			<Heading.H6 marginTop={0} marginLeft={2}>HAGATUN REVISION</Heading.H6>
		</Link>
		<Box as="nav" className="nav" aria-label="Main">
			<List className="nav__list" orientation="horizontal" alignItems="center">
				<Item className="d-not-mobile" as={props => <Link {...props} href="/news" exact>NYHETER</Link>} />
				<Item className="d-not-mobile" as={props => <Link {...props} href="/about" exact>OM OSS</Link>} />
				<Item className="d-not-mobile" as={props => <Link {...props} href="/contact" exact>KONTAKTA</Link>} />
				<Item className="d-not-mobile" as={props => <Link {...props} href="/services" exact>TJÄNSTER</Link>} />
				<Item className="d-not-mobile" as={props => <Button {...props} variant="outline">SÖK</Button>} />
				<IconButton
					size="lg"
					aria-label="Open the menu"
					aria-controls="mobileMenu"
					className="d-only-mobile"
				>
					<HamburgerIcon aria-hidden />
				</IconButton>
			</List>
		</Box>
	</>
