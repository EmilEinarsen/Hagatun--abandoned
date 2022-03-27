import { useMemo } from 'react'
import Head from 'next/head'
import { Box, Divider, Button, BoxProps, Stack } from '@chakra-ui/react'
import clsx from 'clsx'

import { FrostBox } from 'components/core/FrostBox'
import { Text } from 'components/core/Text'
import { Heading } from 'components/core/Heading'
import { AdressIcon, PhoneIcon, MailIcon } from 'components/icons'
import { Thumbnail } from '../../app/Thumbnail'
import { useIsTablet } from 'hooks/useIsTablet'
import { useIsMobile } from 'hooks/useIsMobile'

export const Hero = (props: BoxProps) => {
	const isTablet = useIsTablet()
	const isMobile = useIsMobile()

	const divider = useMemo(() =>
		isMobile ? 
			<Box py=".5rem" width="100%">
				<Divider />
			</Box>
			:
			<Box height="3.5rem">
				<Divider orientation="vertical" />
			</Box>
	, [isMobile])

	return (
		<>
			<Head>
				<link rel="preload" href="/marten-bjork-6dW3xyQvcYE-unsplash.jpg" as="image" />
			</Head>
			<Thumbnail 
				{...props}
				src="/marten-bjork-6dW3xyQvcYE-unsplash.jpg"
				alt=""
				title=""
				childContainerProps={{
					w: '100%',
					h: '100%',
					d: 'flex',
					flexDirection:'column',
					justifyContent: 'space-between',
					align: 'start',
					justify: 'start'
				}}
				aspectRatioProps={isTablet?{
					flipRatio: true,
					maxH: '80vh',
					minH: '750px'
				}:{
					minH: '700px'
				}}
			>
				<Box maxW={470}>
					<Heading.H1 {...isMobile?{
						mt: '0',
						fontSize: '4xl',
						lineHeight: ''
					}:{
						mt: '2rem'
					}}>
						Lorem ipsum dolor sit amet.
					</Heading.H1>
					<Text.Subtitle mt="2rem">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</Text.Subtitle>
				</Box>
				<Box w="100%">
					<FrostBox p=".5rem 1.5rem" w="min-content" borderRadius="1.25rem 1.25rem 0 0">
						<Text.Caption whiteSpace="nowrap">
							KONTAKTA OSS
						</Text.Caption>
					</FrostBox>
					<FrostBox
						display="flex"
						justifyContent="center"
						p="1.5rem" 
						maxW={850} 
						borderRadius="0 1.25rem 1.25rem 1.25rem"
					>
						<Stack 
							direction={isMobile?'column':'row'}
							justifyContent="space-between"
							align={isMobile?undefined:'center'}
							maxW={isMobile?300:undefined} 
							w="100%"
						>

							<Box w="fit-content">
								<Text.Body fontWeight="bold">
									Plats
								</Text.Body>
								<Text.Body2 className={clsx(
									isMobile && 'inline-icon'
								)}>
									Östertullsgatan 9, Laholm <AdressIcon ml="1rem" fontSize="lg" />
								</Text.Body2>
								<Text.Body2 className={clsx(
									isMobile && 'inline-icon'
								)}>
									Kaptensgatan 8, 302 45 Halmstad <AdressIcon ml="1rem" fontSize="lg" />
								</Text.Body2>
							</Box>

							{divider}

							<Box w="fit-content">
								<Text.Body2 fontWeight="bold">
									Telefon
								</Text.Body2>
								<Text.Body2 className={clsx(
									isMobile && 'inline-icon'
								)}>
									Laholm: 070 - 753 79 53 <PhoneIcon ml="1rem" fontSize="md" />
								</Text.Body2>
								<Text.Body2 className={clsx(
									isMobile && 'inline-icon'
								)}>
									Halmstad: 035 - 12 30 95 <PhoneIcon ml="1rem" fontSize="md" />
								</Text.Body2>
							</Box>

							{divider}

							<Box>
								<Button 
									colorScheme="primary" 
									variant="solid" 
									size="lg" 
									leftIcon={<MailIcon fontSize="2xl" />} 
									iconSpacing="1rem"
									p="2.25rem 1.5rem"
									w="100%"
								>
									info@hagatun.se
								</Button>
							</Box>

						</Stack>
					</FrostBox>
				</Box>
			</Thumbnail>
		</>
	)
}