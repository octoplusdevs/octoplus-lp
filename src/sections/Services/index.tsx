import { Cards } from '@/components'
import { Chat } from 'phosphor-react'
import { Wrapper } from './styles'

function SectionServices() {
	return (
		<Wrapper>
			<div className="container">
				<h1>
					Nossos serviços criam valor <br /> para o seu negócio
				</h1>
				<div className="services-cards">
					<Cards.ServiceCard Title={'bla'} Description={'sss'} Icon={Chat} />
					<Cards.ServiceCard Title={'bla'} Description={'sss'} Icon={Chat} />
					<Cards.ServiceCard Title={'bla'} Description={'sss'} Icon={Chat} />
					<Cards.ServiceCard Title={'bla'} Description={'sss'} Icon={Chat} />
					<Cards.ServiceCard Title={'bla'} Description={'sss'} Icon={Chat} />
					<Cards.ServiceCard Title={'bla'} Description={'sss'} Icon={Chat} />
				</div>
			</div>
		</Wrapper>
	)
}

export default SectionServices
