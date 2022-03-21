import { LinkProps } from "@chakra-ui/react"
import { LogoIcon } from "components/icons"
import { Heading } from "components/core/Heading"
import { Link } from "components/core/Link"

interface CompanyLogoProps extends LinkProps {
	isSm?: boolean
}

export const CompanyLogo = ({ isSm, ...props }: CompanyLogoProps) => 
	!isSm ? 
	<Link href="/" aria-label="Go to homepage" exact display="flex" alignItems="center" {...props}>
		<LogoIcon fontSize="7xl" color="#C3A94D" />
		<Heading.Brand marginLeft={2}>HAGATUN REVISION</Heading.Brand>
	</Link>
	:
	<Link href="/" aria-label="Go to homepage" exact display="flex" alignItems="center" {...props}>
		<LogoIcon fontSize="6xl" color="#C3A94D" />
		<Heading.Brand marginTop={0} marginLeft={2} fontSize="sm">HAGATUN REVISION</Heading.Brand>
	</Link>