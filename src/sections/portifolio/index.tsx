import { Portifolio } from '@/components'
import { Wrapper } from './styles'

function SectionHeadline({ ...rest }) {
	return (
		<Wrapper {...rest}>
			<div className="container">
				<Portifolio ImagePath="" Tags={[]} Title="Projecto" Type="SS" />
				<Portifolio ImagePath="" Tags={[]} Title="Projecto" Type="SS" />
				<Portifolio ImagePath="" Tags={[]} Title="Projecto" Type="SS" />
				<Portifolio ImagePath="" Tags={[]} Title="Projecto" Type="SS" />
			</div>
		</Wrapper>
	)
}

export default SectionHeadline
