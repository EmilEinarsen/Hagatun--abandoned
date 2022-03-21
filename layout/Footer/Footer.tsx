import { VStack, WrapProps, Wrap, WrapItem, Box } from '@chakra-ui/react'
import { CompanyLogo } from 'components/app/CompanyLogo'
import { Link } from 'components/core/Link'
import { Text } from 'components/core/Text'
import { FacebookIcon, FacebookIconMeta } from 'components/icons'

const links = [
	{ 
		title: 'Tjänster', 
		links: [
			{ text: 'Bokslut, Årsredovisning & Deklaration', href: '' },
			{ text: 'Bokföring', href: '' },
			{ text: 'Rådgivning', href: '' },
			{ text: 'Löneadministration', href: '' },
			{ text: 'Uthyrning av personal', href: '' },
			{ text: 'Moms', href: '' },
			{ text: 'Pension', href: '' },
		] 
	},
	{ 
		title: 'Företaget', 
		links: [
			{ text: 'Om oss', href: '' },
			{ text: 'Kontakta', href: '' },
			{ text: 'Nyheter', href: '' },
			{ text: 'Referenser', href: '' },
			{ text: 'Vi sponsrar', href: '' },
		]
	},
]

export const Footer = (props: WrapProps) =>
	<Wrap justify="space-between" textAlign="start" {...props}>
		<WrapItem as={VStack} maxW={400} spacing="2rem">
			<CompanyLogo isSm />
			<Text.Body>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			</Text.Body>
			<Link isExternal href={FacebookIconMeta.url}><FacebookIcon fontSize="4xl" color="facebook.400" /></Link>
		</WrapItem>
		{links.map(groups => 
			<WrapItem key={groups.title} as={VStack} maxW={250}>
				<Text.Body fontWeight="bold" mt={0}>
					{groups.title}
				</Text.Body>
				{groups.links.map(({text, href}) => 
					<Link href={href} key={text}>{text}</Link>
				)}
			</WrapItem>
		)}
		<WrapItem as={VStack} maxW={250}>
			<Text.Body fontWeight="bold" mt={0}>
				Kontakta oss
			</Text.Body>
			<Box>
				<Text.Body2 mt={0}>Laholmskontoret:</Text.Body2>
				<Text.Body2 mt={0}>Östertullsgatan 9, Laholm</Text.Body2>
				<Text.Body2 mt={0}>Telefon: 070-753 79 53</Text.Body2>
			</Box>
			<Box>
				<Text.Body2 mt={0}>Halmstadskontoret:</Text.Body2>
				<Text.Body2 mt={0}>Kaptensgatan 8, 302 45 Halmstad Telefon: 035-123095</Text.Body2>
			</Box>
			<Box>				
				<Text.Body2 mt={0}>Postadress:</Text.Body2>
				<Text.Body2 mt={0}>Box 15, 312 21 Laholm</Text.Body2>
			</Box>
		</WrapItem>
	</Wrap>