import { Wrapper } from './style'
import Link from 'next/link'
import { ButtonCallToAction } from '../ButtonCTA'
import Image from 'next/image'
import { Hamburger, List, X } from 'phosphor-react'
import { useState } from 'react'

interface iHeaderProps {
	links: {
		text: string
		href: string
	}[]
	onToggleMenu: () => void
	isMobile: boolean
}

export function Header(props: iHeaderProps) {
	const { links, isMobile, onToggleMenu } = props
	return (
		<Wrapper>
			<div className="container">
				<Link href={'/'} className="logo">
					<Image
						src="/octoplus-logo.svg"
						alt="octoplus developers"
						width="32"
						height="32"
					/>
					<h4>OCTOPLUS</h4>
				</Link>
				<nav className="menu">
					<ul>
						{links.map(({ text, href }) => (
							<li className="item">
								<Link href={href}>{text}</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className="cta">
					<ButtonCallToAction
						className="call-to-action"
						text="Começar Projecto"
						Secundary={false}
					/>
					<button onClick={onToggleMenu} className="button-hamburguer">
						{!isMobile ? <List size={32} /> : <X size={32} />}
					</button>
				</div>
			</div>
			<nav className={`menu-mobile ${isMobile ? 'visible' : 'invisible'}`}>
				<ul>
					{links.map(({ text, href }) => (
						<li className="item active">
							<Link href={href}>{text}</Link>
						</li>
					))}
				</ul>
			</nav>
		</Wrapper>
	)
}
