import React from "react"

import { usePrefersReducedMotion } from "@chakra-ui/react"
import { TransitionLayout, TransitionLayoutProps } from "./TransitionLayout"

export const Page = ({ children, ...props }: React.PropsWithChildren<TransitionLayoutProps>) => {
	const shouldReduceMotion = usePrefersReducedMotion()
	
	return !shouldReduceMotion ? (
		<TransitionLayout {...props}>
			{children}
		</TransitionLayout>
	) : <>{children}</>
}
