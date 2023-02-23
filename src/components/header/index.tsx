import { Wrapper } from './style'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, List, X } from 'phosphor-react'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

interface iHeaderProps {
	links: {
		text: string
		href: string
	}[]
	onToggleMenu: () => void
	isMobile: boolean
	activedSection: string
}
type HTMLElementEvent<T extends HTMLElement> = Event & {
	target: T
	href: string
}

export default function Header(props: iHeaderProps) {
	const { links, isMobile, onToggleMenu, activedSection } = props
	const router = useRouter()

	const handleAnchorClick = (e: HTMLElementEvent<HTMLLinkElement>) => {
		e.preventDefault()

		const href = e.target.getAttribute('href')

		router.push(href, undefined, { scroll: false })
	}

	return (
		<Wrapper>
			<div className="container" id="header">
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
							<li
								className={`item ${
									href.split('#')[1] === activedSection ? 'active' : ''
								}`}
							>
								<Link href={href} onClick={handleAnchorClick}>
									{text}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className="cta">
					<Link href={'/start'} className="call-to-action">
						<span>Começar Projecto</span>
						<ArrowRight size={20} className="icon" />
					</Link>
					<button onClick={onToggleMenu} className="button-hamburguer">
						{!isMobile ? <List size={32} /> : <X size={32} />}
					</button>
				</div>
			</div>
			<nav className={`menu-mobile ${isMobile ? 'visible' : 'invisible'}`}>
				<ul>
					{links.map(({ text, href }) => (
						<li className="item">
							<Link href={href}>{text}</Link>
						</li>
					))}
				</ul>
			</nav>
		</Wrapper>
	)
}
