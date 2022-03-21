import React, { useEffect, useRef } from 'react'
import clsx from 'clsx'

import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box, List, VStack } from '@chakra-ui/layout'
import FocusLock from '@chakra-ui/focus-lock'
import { Fade, Portal, VisuallyHidden } from '@chakra-ui/react'

import { Link } from 'components/core/Link'
import { CloseIcon, HamburgerIcon } from 'components/icons'
import { useMount } from 'hooks/useMount'
import { useIsMobile } from 'hooks/useIsMobile'
import { useDisableScroll } from 'hooks/useDisableScroll'
import { SearchIcon } from 'components/icons/SearchIcon'
import { CompanyLogo } from 'components/app/CompanyLogo'
import { Item } from './Menu'


/**
 * This components appearance should be synced with `Menu`, so that `Menu` can fake `MobileMenu`s 
 * appearance before bing swapped dynamically in `Nav`
 */
const MobileMenu = () => {
	const btnRef = useRef<HTMLButtonElement>(null)
	const headerRef = useRef<HTMLElement | null>(null)
	
	useMount(() => { headerRef.current = document.querySelector('#header')?.parentElement ?? null })

	const { isOpen: isMenuOpen, onToggle: onToggleMenu, onClose: onCloseMenu } = useDisclosure()
	const { isOpen: isSearchOpen, onToggle: onToggleSearch, onClose: onCloseSearch } = useDisclosure()
	const { isOpen: isVisuallyHidden, onOpen: onHide, onClose: onShow } = useDisclosure()

	const isMobile = useIsMobile()
	useEffect(() => { isMobile || onCloseMenu() }, [isMobile, onCloseMenu])

	useDisableScroll({ enabled: isMobile && isMenuOpen })
	
	return (
		<>
			{/* 
				Adds a div to the dom with data attribute "data-focus-lock-disabled" 
				use this to style navigation since FocusLock doesn't have the props className or style 
			*/}
			<FocusLock finalFocusRef={btnRef} isDisabled={!isMenuOpen}>
				<CompanyLogo onClick={onCloseMenu} isSm />
				<Box as="nav" className="nav" aria-label="Main">
					<List className="nav__list" orientation="horizontal" alignItems="center">
						<IconButton
							size="lg"
							onClick={onToggleSearch}
							aria-expanded={isSearchOpen}
							aria-label={`${isMenuOpen ? 'Close' : 'Open'} the search`}
							aria-controls="searchModal"
							borderRadius="base"
							variant="naked"
						>
							{<SearchIcon aria-hidden fontSize="2xl" />}
						</IconButton>
						<IconButton
							size="lg"
							ref={btnRef} 
							onClick={onToggleMenu}
							aria-expanded={isMenuOpen} 
							aria-label={`${isMenuOpen ? 'Close' : 'Open'} the menu`}
							aria-controls="mobileMenu"
							borderRadius="base"
							variant="naked"
						>
							{isMenuOpen 
								? <CloseIcon aria-hidden fontSize="2xl" /> 
								: <HamburgerIcon aria-hidden fontSize="2xl" />
							}
						</IconButton>
					</List>
					<Fade 
						in={isMenuOpen}
						onAnimationStart={onShow}
						onAnimationComplete={() => !isMenuOpen && onHide()} 
					>
						<VStack
							as={isVisuallyHidden ? props => <VisuallyHidden as={List} {...props} /> : List}
							d={{ base: 'unset', md: 'none' }}
							className="nav__list nav__list--mobile"
							id="mobileMenu"
						>
							<Item as={props => <Link {...props} href="/news" exact>NYHETER</Link>} isDrawer onClick={onCloseMenu} />
							<Item as={props => <Link {...props} href="/about" exact>OM OSS</Link>} isDrawer onClick={onCloseMenu} />
							<Item as={props => <Link {...props} href="/contact" exact>KONTAKTA</Link>} isDrawer onClick={onCloseMenu} />
							<Item as={props => <Link {...props} href="/services" exact>TJÄNSTER</Link>} isDrawer onClick={onCloseMenu} />
						</VStack>
						<Portal containerRef={headerRef}>
							{/* Needed since the portal breaks the outer Fade effect */}
							<Fade in={isMenuOpen}>
								<Box
									d={isMenuOpen ? 'unset' : 'none'}
									className="nav__backdrop"
									onClick={onCloseMenu}
								/>
							</Fade>
						</Portal>
					</Fade>
				</Box>
			</FocusLock>
		</>
	)
}

export default MobileMenu
