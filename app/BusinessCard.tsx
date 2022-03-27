import Image from 'next/image'
import { Box, Flex, HStack, StackProps, VStack } from '@chakra-ui/react'

import { Heading } from 'components/core/Heading'
import { Text } from 'components/core/Text'
import { ArrowForwardIcon } from 'components/icons'
import { useIsMobile } from 'hooks/useIsMobile'

interface BusinessCard extends StackProps {
	src: string
	alt: string
	title: string
	description: string
}

export const BusinessCard = ({ src, alt, title, description, ...props }: BusinessCard) => 
	!useIsMobile() ?
		<VStack
			justify="end"
			w={380}
			h={380}
			borderRadius={50}
			bgColor="#FCFAF5"
			overflow="hidden"
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
					mb=".25rem"
				>
					<Heading.H2 
						fontSize="xl" 
						fontWeight="bold"
						mt={0}
					>
						{title.toUpperCase()}
					</Heading.H2>
					<ArrowForwardIcon
						fontSize="2xl"
					/>
				</Flex>
				<Text.Subtitle 
					fontSize="md" 
					fontWeight="light"
				>
					{description}
				</Text.Subtitle>
			</Box>
		</VStack>
	: 
		<HStack
			borderRadius={50}
			w="100%"
			h={250}
			bgColor="#FCFAF5"
			overflow="hidden"
			{...props}
		>
			<HStack  
				w="50%"
				justify="center"
			>
				<Image
					src={src}
					alt={alt}
					title={title} 
					width={150}
					height={150}
				/>
			</HStack>
			<VStack
				w="50%"
				h="100%"
				p="2rem 1rem"
				borderRadius="0 50px 50px 0"
				bgColor="#F5F3ED"
				align="end"
			>
				<Heading.H2 
					w="100%"
					fontSize="md" 
					fontWeight="bold" 
					mt={0}
				>
					{title.toUpperCase()}
				</Heading.H2>
				<Text.Subtitle 
					fontSize="md" 
					fontWeight="light"
				>
					{description}
				</Text.Subtitle>
				<ArrowForwardIcon  fontSize="2xl" />
			</VStack>
		</HStack>