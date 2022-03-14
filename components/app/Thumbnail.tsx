import Image from 'next/image'

import { AspectRatio, Box, BoxProps } from "@chakra-ui/layout"
import { useIsMobile } from 'hooks/useIsMobile'

interface ThumbnailProps extends BoxProps {
	justify: 'start' | 'end' | 'center'
	align: 'start' | 'end' | 'center'
	src: string
	alt: string
	title: string
	ratio?: number
	childContainerProps?: BoxProps
}

export const Thumbnail = ({
	children,
	src,
	ratio = 16/9,
	alt,
	title,
	justify,
	align,
	childContainerProps,
	...props
}: React.PropsWithChildren<ThumbnailProps>) => {
	const isMobile = useIsMobile()
	return (
		<AspectRatio ratio={ratio}>
			<Box
				d="flex"
				borderRadius={50}
				justifyContent={`${justify} !important`}
				alignItems={`${align} !important`}
				{...props}
			>
				<Image
					src={src}
					layout="fill"
					alt={alt}
					title={title} 
					priority 
				/>
				<Box 
					pos="absolute"
					p={isMobile?'5rem 1rem':'5rem'}
					w="100%"
					{...childContainerProps??null}
				>
					{children}
				</Box>
			</Box>
		</AspectRatio>
	)
}