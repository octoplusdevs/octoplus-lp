import { HeaderContainer, HeaderContent, MenuMobile } from './style'
import { ButtonCallToAction } from '../ButtonCTA'
import { useState } from 'react'

export function Header() {
	const [viewMenuMobile, setViewMenuMobile] = useState(false)

	function closeMenuMobile() {
		setViewMenuMobile(!viewMenuMobile)
	}

	return (
		<HeaderContainer>
			<HeaderContent>
				<div className="logo">
					<img src="/logo.svg" alt="" />
					<h4>OCTOPLUS</h4>
				</div>
				<div className="menu-desktop">
					<nav>
						<a href="" className="active">
							Home
						</a>
						<a href="">Team</a>
						<a href="">Projectos</a>
						<a href="">Serviços</a>
					</nav>
					<ButtonCallToAction text="Começar Projecto" Secundary={false} />
				</div>
				<div className="menu-hamburguer" onClick={closeMenuMobile}>
					<input
						type="checkbox"
						className="hamburguer"
						checked={viewMenuMobile}
					/>
				</div>
			</HeaderContent>
			<MenuMobile activeMenuMobile={viewMenuMobile}>
				<nav>
					<a href="" className="active">
						Home
					</a>
					<a href="">Team</a>
					<a href="">Projectos</a>
					<a href="">Serviços</a>
				</nav>
			</MenuMobile>
		</HeaderContainer>
	)
}
