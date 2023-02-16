import { HeaderAccordion, Wrapper, AccordionContent } from './style'
import { CaretDown } from 'phosphor-react'
import { useState } from 'react'

interface PropsTypes {
	Position: number
	Title: string
	Panel: string
}

export function Accordion(props: PropsTypes) {
	const [displayAccordionContent, setdisplayAccordionContent] = useState(false)

	const { Position, Title, Panel } = props

	function hideAcordionContent() {
		setdisplayAccordionContent(!displayAccordionContent)
	}

	return (
		<Wrapper>
			<HeaderAccordion
				openAcordion={displayAccordionContent}
				onClick={hideAcordionContent}
			>
				<div className="header-content">
					<span>{Position}</span>
					<p>{Title}</p>
				</div>
				<CaretDown size={32} className="accordion-icon" />
			</HeaderAccordion>
			<AccordionContent openAcordion={displayAccordionContent}>
				<p>{Panel}</p>
			</AccordionContent>
		</Wrapper>
	)
}
