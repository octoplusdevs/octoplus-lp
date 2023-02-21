import { Wrapper } from './style'
import { CaretDown } from 'phosphor-react'

interface iAccordionPropsTypes {
	index: number
	title: string
	content: string
	onToggle: (index: any) => void
	isOpen: boolean
}

export function Acordion(props: iAccordionPropsTypes) {
	const { index, title, content, onToggle, isOpen } = props

	return (
		<Wrapper className={` ${isOpen ? 'open' : 'close'}`}>
			<div className="header" onClick={onToggle}>
				<div className="header__title">
					<span>{index}</span>
					<p>{title}</p>
				</div>
				<div className="header__icon">
					<CaretDown size={32} />
				</div>
			</div>
			<div className="acordion__content">{content}</div>
		</Wrapper>
	)
}
