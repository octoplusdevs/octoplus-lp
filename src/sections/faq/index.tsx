import { Accordion } from '@/components'
import { useState } from 'react'
import { Wrapper } from './styles'

function SectionFAQ({ ...rest }) {
	const [openAccordion, setOpenAccordion] = useState(false)
	const [clicked, setClicked] = useState<any>(null)

	const handleToggle = (index: any) => {
		if (clicked === index) {
			return setClicked('0')
		}
		setClicked(index)
	}

	const FAQ_LIST = [
		{
			index: 1,
			title: 'Exemplo de titulo',
			conteudo:
				'conteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudoconteudo',
		},
		{
			index: 2,
			title: 'Exemplo de titulo',
			conteudo: 'conteudo',
		},
		{
			index: 3,
			title: 'Exemplo de titulo',
			conteudo: 'conteudo',
		},
		{
			index: 4,
			title: 'Exemplo de titulo',
			conteudo: 'conteudo',
		},
		{
			index: 5,
			title: 'Exemplo de titulo',
			conteudo: 'conteudo',
		},
		{
			index: 6,
			title: 'Exemplo de titulo',
			conteudo: 'conteudo',
		},
	]

	return (
		<Wrapper>
			<div className="container" {...rest}>
				<div className="faq-header">
					<h3>F.A.Q</h3>
					<h2>Tire as suas principais d??vidas</h2>
				</div>
				<div className="faq-list">
					{FAQ_LIST.map((item, index) => (
						<Accordion
							title={item.title}
							content={item.conteudo}
							index={item.index}
							isOpen={clicked === index}
							onToggle={() => handleToggle(index)}
							key={index}
						/>
					))}
				</div>
			</div>
		</Wrapper>
	)
}

export default SectionFAQ
