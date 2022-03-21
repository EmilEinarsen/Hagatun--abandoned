import { Box } from '@chakra-ui/react'

import { Nav } from "layout/Nav/Nav"
import { Page } from 'layout/Page'
import { Footer } from 'layout/Footer/Footer'

interface LayoutProps { 
	childKey: string 
}

const Layout = ({ children, childKey }: React.PropsWithChildren<LayoutProps>) =>
	<div className="wrapper">
		<div className="page">
			<header className="header" id="header">
				<Box className="header__container">
					<Nav className="main-navigation" />
				</Box>
			</header>
			<main className="main" id="main">
				<Page className="main__container" childKey={childKey}>
					{children}
				</Page>
			</main>
			<footer className="footer" id="footer">
				<Footer className="footer__container" />
			</footer>
		</div>
	</div>

export default Layout
