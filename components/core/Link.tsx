import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Link as StyledLink, LinkProps as StyledLinkProps, VisuallyHidden } from '@chakra-ui/react';

export interface LinkProps extends Omit<StyledLinkProps, 'href'> {
	href?: string
	exact?: boolean
}

export const Link = ({ 
	href = '',
	exact,
	children,
	...props
}: React.PropsWithChildren<LinkProps>) => {
	const { pathname } = useRouter();
	const isActive = exact ? pathname === href : pathname.startsWith(href);
	
	return (
		<NextLink href={href} passHref scroll={false}>
			<StyledLink 
				{...props} 
				{...isActive?{'aria-current': 'page'}:null} 
				{...props.isExternal?{rel:'noopener noreferrer'}:null}
			>
				{children}{props.isExternal && <VisuallyHidden> (opens in a new tab)</VisuallyHidden>}
			</StyledLink>
		</NextLink>
	);
}