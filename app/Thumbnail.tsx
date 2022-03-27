import Image from 'next/image'
import { AspectRatio, Box, BoxProps, StackProps } from "@chakra-ui/layout"

import { useIsTablet } from 'hooks/useIsTablet'

interface ThumbnailProps extends BoxProps {
	src: string
	alt: string
	title: string
	ratio?: number
	aspectRatioProps?: BoxProps & {
		flipRatio?: boolean
	}
	childContainerProps?: StackProps
}

export const Thumbnail = ({
	children,
	src,
	ratio = 16/9,
	alt,
	title,
	aspectRatioProps: {
		flipRatio,
		...aspectRatioProps
	} = {},
	childContainerProps,
	...props
}: React.PropsWithChildren<ThumbnailProps>) => 
	<Box {...props}>
		<AspectRatio ratio={useIsTablet()?2/6:ratio} {...aspectRatioProps}>
			<Box borderRadius={50}>
				<Image
					src={src}
					layout="fill"
					alt={alt}
					title={title} 
					priority
					objectFit="cover"
				/>
				<Box
					pos="absolute"
					p={useIsTablet()?'3.5rem 1rem':'4rem'}
					{...childContainerProps??null}
				>
					{children}
				</Box>
			</Box>
		</AspectRatio>
	</Box>