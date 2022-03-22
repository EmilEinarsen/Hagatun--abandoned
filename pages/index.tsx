import Head from "next/head"
import { Box } from "@chakra-ui/react"

import { Hero } from "components/app/Hero"
import { References } from "components/app/References"
import { Thumbnail } from "components/app/Thumbnail"
import { Heading } from "components/core/Heading"
import { Text } from "components/core/Text"
import { Section } from "components/core/Section"

const Home: Page = () =>
	<>
		<Head>
			<title>About Me · Emil Einarsen</title>
		</Head>
		<Hero as={Section} />
		<Thumbnail 
			src="/stellrweb-djb1whucfBY-unsplash.jpg"
			align="start"
			justify="end"
			alt=""
			title=""
			as={Section}
			ratio={16/6}
		>
			<Box maxW={470}>
				<Heading.H1 mt="2rem">
					Lorem ipsum dolor sit amet.
				</Heading.H1>
				<Text.Subtitle mt="2rem">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text.Subtitle>
			</Box>
		</Thumbnail>
		<References />
	</>

export default Home
