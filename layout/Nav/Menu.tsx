import { Box, List, ListItem } from '@chakra-ui/layout'
import { Text, TextProps, IconButton, Button } from '@chakra-ui/react'
import { CompanyLogo } from 'components/app/CompanyLogo'

import { Link } from 'components/core/Link'
import { HamburgerIcon } from 'components/icons/HamburgerIcon'

export const Item: React.FC<TextProps & { isDrawer?: boolean }> = ({ isDrawer, ...props }) => 
	<ListItem>
		<Text
			{...props}
			{...isDrawer?{display:'flex', justifyContent: 'center'}:null}
			fontSize="md"
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
		<CompanyLogo />
		<Box as="nav" className="nav" aria-label="Main" width="100%" maxW="700px">
			<List className="nav__list" orientation="horizontal" alignItems="center" width="100%" justifyContent="space-between">
				<Item className="d-not-mobile" as={props => <Link {...props} href="/news" exact>NYHETER</Link>} />
				<Item className="d-not-mobile" as={props => <Link {...props} href="/about" exact>OM OSS</Link>} />
				<Item className="d-not-mobile" as={props => <Link {...props} href="/contact" exact>KONTAKTA</Link>} />
				<Item className="d-not-mobile" as={props => <Link {...props} href="/services" exact>TJÄNSTER</Link>} />
				<Button className="d-not-mobile" variant="outline" colorScheme="primary" padding="1.5rem 3rem" fontSize="md">SÖK</Button>
				<IconButton
					size="lg"
					aria-label="Open the menu"
					aria-controls="mobileMenu"
					className="d-only-mobile"
					borderRadius="base"
				>
					<HamburgerIcon aria-hidden />
				</IconButton>
			</List>
		</Box>
	</>
