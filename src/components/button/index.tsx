import { Wrapper } from './style'

interface ButtonProps{
	Text: string
	Secundary: boolean
	Icon?: React.ElementType
}

export function Button(props: ButtonProps) {
	const { Text, Secundary, Icon } = props

	return (
		<Wrapper Secundary={Secundary}>
			{Text}
			{Icon ? <Icon size={24} className="icon"/> : ''}
		</Wrapper>
	)
}
 