import Head from "next/head"
import { Button, VStack } from "@chakra-ui/react"

import { Hero } from "layout/sections/Hero"
import { References } from "layout/sections/References"
import { Thumbnail } from "app/Thumbnail"
import { Heading } from "components/core/Heading"
import { Text } from "components/core/Text"
import { Section } from "components/core/Section"
import { Services } from "layout/sections/Services"
import { useIsTablet } from "hooks/useIsTablet"
import { FrostBox } from "components/core/FrostBox"

const Home: Page = () => {
	const isTablet = useIsTablet()
	return (
		<>
			<Head>
				<title>Emil Einarsen</title>
			</Head>
			<Hero as={Section} />
			<Services as={Section} />
			<Thumbnail 
				src="/stellrweb-djb1whucfBY-unsplash.jpg"
				alt=""
				title=""
				as={Section}
				ratio={16/6}
				childContainerProps={{
					display: 'flex',
					justifyContent: 'end',
					w: '100%'
				}}
				aspectRatioProps={isTablet?{
					maxH: '70vh',
				}:undefined}
			>
				{!isTablet ? 
					<VStack maxW={470} spacing="2rem" align="start">
						<Heading.H2 fontWeight="bold">
							Lorem ipsum dolor sit amet.
						</Heading.H2>
						<Text.Subtitle fontSize="xl">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum iaculis sem
						</Text.Subtitle>
						<Button
							colorScheme="primary"
							p="2rem 1rem"
						>
							Kontakta oss
						</Button>
					</VStack>
				:
					<VStack as={FrostBox} spacing="2rem" align="start" p="1rem 2rem" borderRadius={50}>
						<Heading.H2 fontWeight="bold" fontSize="3xl" m={0}>
							Lorem ipsum dolor sit amet.
						</Heading.H2>
						<Text.Subtitle fontSize="2xl">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum iaculis sem
						</Text.Subtitle>
						<Button
							colorScheme="primary"
							p="2rem 1rem"
							w="100%"
						>
							Kontakta oss
						</Button>
					</VStack>
				}
			</Thumbnail>
			{!isTablet && <References as={Section} />}
		</>
	)
}
export default Home
