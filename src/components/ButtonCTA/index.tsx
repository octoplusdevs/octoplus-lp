import { Wrapper } from './style'
import { ArrowRight } from 'phosphor-react'

interface propsType {
	text: string
	Secundary: boolean
}

export function ButtonCallToAction(props: propsType) {
	const { text, Secundary } = props

	return (
		<Wrapper {...props}>
			{text}
			<ArrowRight size={24} className="arrow-right" />
		</Wrapper>
	)
}
