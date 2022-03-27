import Image from 'next/image'
import { StackProps, VStack, Wrap, WrapItem } from '@chakra-ui/react'

import { Heading } from 'components/core/Heading'
import { Text } from 'components/core/Text'

const Reference = ({ src, alt }: { src: string, alt: string }) => 
	<WrapItem padding=".5rem">
		<Image 
			src={src}
			alt={alt}
			height={120}
			width={220}
			objectFit="contain"
		/>
	</WrapItem>

export const References = (props: StackProps) => 
	<VStack spacing="2rem" {...props}>
		<Heading.H2>Referenser</Heading.H2>
		<Text.Subtitle maxW={400} textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text.Subtitle>
		<Wrap spacing="5rem" justify="space-around">
			<Reference 
				src="/gimsteinn.png" 
				alt="gimsteinn"
			/>
			<Reference 
				src="/jcteknik.png" 
				alt="jcteknik"
			/>
			<Reference 
				src="/triventus.png" 
				alt="triventus"
			/>
			<Reference 
				src="/wolfenshunderi.png" 
				alt="wolfenshunderi"
			/>
			<Reference 
				src="/kgb.png" 
				alt="kgb"
			/>
		</Wrap>
	</VStack>