import Head from 'next/head'
import { Box, Flex, Divider, Button, BoxProps } from '@chakra-ui/react'

import { FrostBox } from 'components/core/FrostBox'
import { Text } from 'components/core/Text'
import { Heading } from 'components/core/Heading'
import { AdressIcon, PhoneIcon, MailIcon } from 'components/icons'
import { Thumbnail } from './Thumbnail'

export const Hero= (props: BoxProps) =>
	<>
		<Head>
			<link rel="preload" href="/marten-bjork-6dW3xyQvcYE-unsplash.jpg" as="image" />
		</Head>
		<Thumbnail 
			{...props}
			src="/marten-bjork-6dW3xyQvcYE-unsplash.jpg"
			align="center"
			justify="start"
			alt=""
			title=""
			childContainerProps={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection:'column',
				justifyContent: 'space-between'
			}}
		>
			<Box maxW={470}>
				<Heading.H1 mt="2rem">
					Lorem ipsum dolor sit amet.
				</Heading.H1>
				<Text.Subtitle mt="2rem">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text.Subtitle>
			</Box>
			<Box>
				<FrostBox p=".5rem 1.5rem" w="min-content" borderRadius="1.25rem 1.25rem 0 0">
					<Text.Caption mt={0} whiteSpace="nowrap">
						KONTAKTA OSS
					</Text.Caption>
				</FrostBox>
				<FrostBox p="1.5rem" maxW={850} borderRadius="0 1.25rem 1.25rem 1.25rem">
					<Flex justifyContent="space-between" alignItems="center">

						<Box>
							<Text.Body fontWeight="bold" mt={0}>
								Plats
							</Text.Body>
							<Text.Body2>
								Östertullsgatan 9, Laholm <AdressIcon ml=".5rem" fontSize="lg" />
							</Text.Body2>
							<Text.Body2>
								Kaptensgatan 8, 302 45 Halmstad <AdressIcon ml=".5rem" fontSize="lg" />
							</Text.Body2>
						</Box>

						<Box height="3.5rem">
							<Divider orientation="vertical" />
						</Box>

						<Box>
							<Text.Body2 fontWeight="bold" >
								Telefon
							</Text.Body2>
							<Text.Body2>
								070 - 753 79 53 <PhoneIcon ml=".5rem" fontSize="md" />
							</Text.Body2>
							<Text.Body2>
								035 - 12 30 95 <PhoneIcon ml=".5rem" fontSize="md" />
							</Text.Body2>
						</Box>

						<Box height="3.5rem">
							<Divider orientation="vertical" />
						</Box>

						<Box>
							<Button 
								colorScheme="primary" 
								variant="solid" 
								size="lg" 
								leftIcon={<MailIcon fontSize="2xl" />} 
								iconSpacing="1rem"
								p="2.25rem 1.5rem"
							>
								<Text.Body mt={0} color="inherit">info@hagatun.se</Text.Body>
							</Button>
						</Box>

					</Flex>
				</FrostBox>
			</Box>
		</Thumbnail>
	</>