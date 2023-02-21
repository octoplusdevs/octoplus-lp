import BallonItem from '@/components/ballonItem'
import CustomerCard from '@/components/cards/customer'
import ServiceCard from '@/components/cards/service'
import { Desktop } from 'phosphor-react'
import Head from 'next/head'
import SectionPortifolio from '@/sections/portifolio'
import { Header } from '@/components/header'
import { useState } from 'react'

const Portifolios = [
	{
		Title: 'Teste',
		ImagePath: 'eee',
		Tags: [
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
		],
		Type: 'Website',
	},
	{
		Title: 'Teste',
		ImagePath: 'eee',
		Tags: [
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
		],
		Type: 'Website',
	},
	{
		Title: 'Teste',
		ImagePath: 'eee',
		Tags: [
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
		],
		Type: 'Website',
	},
	{
		Title: 'Teste',
		ImagePath: 'eee',
		Tags: [
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
		],
		Type: 'Website',
	},
	{
		Title: 'Teste',
		ImagePath: 'eee',
		Tags: [
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
		],
		Type: 'Website',
	},
	{
		Title: 'Teste',
		ImagePath: 'eee',
		Tags: [
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
		],
		Type: 'Website',
	},
	{
		Title: 'Teste',
		ImagePath: 'eee',
		Tags: [
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
		],
		Type: 'Website',
	},
	{
		Title: 'Teste',
		ImagePath: 'eee',
		Tags: [
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
			{ Description: 'Teste', Title: 'Design' },
		],
		Type: 'Website',
	},
]

export default function Home() {
	const [isMobile, setIsMobile] = useState(false)
	const headerLinks = [
		{ href: '/#home', text: 'Home' },
		{ href: '/#team', text: 'Team' },
		{ href: '/#projects', text: 'Projectos' },
		{ href: '/#services', text: 'Serviços' },
		// { href: '/#faqs', text: 'Perguntas Frequentes' },
		{ href: '/#depoiments', text: 'Depoimentos' },
	]

	function handleToggleMenu() {
		setIsMobile(!isMobile)
	}
	return (
		<>
			<main style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
				<Header
					links={headerLinks}
					onToggleMenu={handleToggleMenu}
					isMobile={isMobile}
				/>
				<CustomerCard
					Name="Wilmy Danguya"
					Feedback={
						'Existêm diversas vantagens para escolheres a Octoplus Developers, porém iremos apenas focar em 3 grandes beneficios'
					}
					Role={'Fundador da Octoplus'}
				/>
				<ul style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
					<BallonItem Description="Exemplo basico" Title="Design" />
					<BallonItem Description="Exemplo basico" Title="Software" />
					<BallonItem Description="Exemplo basico" Title="Teste" />
				</ul>
				<ServiceCard
					Icon={Desktop}
					Title={'Branding'}
					Description={
						'Ajudamos-te a criar um projecto que da uma boa experiencia de usuario para seus.'
					}
				/>
				{Portifolios.map(({ Title, ImagePath, Tags, Type }) => (
					<SectionPortifolio
						Title={Title}
						ImagePath={ImagePath}
						Tags={Tags}
						Type={Type}
					/>
				))}
			</main>
		</>
	)
}
