import React, { useState, useEffect, useMemo, useCallback } from 'react'

import { useMount } from 'hooks/useMount'
import { useBoolean } from '@chakra-ui/hooks'

export interface ComponentProps {
	onTransitionEnd?: () => void
	className?: string
	id?: string
	style?: React.CSSProperties
}

export interface TransitionLayoutProps extends ComponentProps {
	childKey: string
	type?: React.CSSProperties['transitionTimingFunction']
	duration?: React.CSSProperties['transitionDuration']
	withInitial?: boolean
	animate?: React.CSSProperties
	exit?: React.CSSProperties
	as?: React.ComponentType<ComponentProps> | string
}

TransitionLayout.defaultProps = {
	type: 'ease',
	duration: '.15s',
	animate: { opacity: 1 },
	exit: { opacity: 0 },
}

/* 
	Built to be used for transitioning webpages 
*/
export function TransitionLayout({ 
	children: nextChildren, 
	childKey: nextChildKey,
	type: transitionTimingFunction,
	duration: transitionDuration,
	withInitial,
	animate,
	exit,
	as: Component = 'div',
	...props
}: React.PropsWithChildren<TransitionLayoutProps>) {
	const { show, hide } = useMemo(() => ({
		show: { ...animate, transitionTimingFunction, transitionDuration },
		hide: { ...exit, transitionTimingFunction, transitionDuration },
	}), [animate, exit, transitionDuration, transitionTimingFunction])

  const [current, setCurrent] = useState({ childKey: nextChildKey, children: nextChildren })
	const [ shouldShow, { toggle: toggleStage } ] = useBoolean(!withInitial)

	useMount(() => {
		withInitial && toggleStage()
	})

  useEffect(() => {
    nextChildKey !== current.childKey && toggleStage()
  }, [current, nextChildKey, toggleStage])

  return (
		<Component
			{...props}
			onTransitionEnd={() => {
				if(shouldShow) return
				setCurrent({ childKey: nextChildKey, children: nextChildren })
				toggleStage()
				window.scrollTo(0,0)
				props.onTransitionEnd?.()
			}}
			style={{ ...props.style, ...shouldShow ? show : hide }}
		>
			{current.children}
		</Component>
  )
}
