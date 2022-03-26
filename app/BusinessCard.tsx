import Image from 'next/image'
import { Box, Flex, StackProps, VStack } from '@chakra-ui/react'

import { Heading } from 'components/core/Heading'
import { Text } from 'components/core/Text'
import { ArrowForwardIcon } from 'components/icons'

interface BusinessCard extends StackProps {
	src: string
	alt: string
	title: string
	description: string
}

export const BusinessCard = ({ src, alt, title, description, ...props }: BusinessCard) => 
	<VStack
		borderRadius={50}
		bgColor="#FCFAF5"
		w={380}
		h={380}
		justify="end"
		{...props}
	>
		<Box p="1rem">
			<Image
				src={src}
				alt={alt}
				title={title} 
				width={180}
				height={180}
			/>
		</Box>
		<Box
			bgColor="#F5F3ED"
			h={130}
			w="100%"
			p="1rem 2rem"
			borderRadius="0 0 50px 50px"
		>
			<Flex 
				justify="space-between"
				align="center"
			>
				<Heading.H2 
					fontSize="2xl" 
					fontWeight="bold" 
					m={0}
				>
					{title.toUpperCase()}
				</Heading.H2>
				<ArrowForwardIcon
					fontSize="2xl"
				/>
			</Flex>
			<Text.Subtitle 
				fontSize="lg" 
				fontWeight="light"
			>
				{description}
			</Text.Subtitle>
		</Box>
	</VStack>
