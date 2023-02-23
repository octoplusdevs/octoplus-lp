import BallonItem from '@/components/ballonItem'
import Image from 'next/image'
import { MouseSimple } from 'phosphor-react'
import { Wrapper } from './styles'

function SectionHeadline() {
	return (
		<Wrapper>
			<div className="container">
				<div className="content">
					<h1>
						Transforme o seu negócio com soluções de software{' '}
						<span>inovadoras e sob medida.</span>
					</h1>
					<h2>
						Design de UI intuitivo e funcionalidade robusta para ajudar sua
						empresa a inovar e crescer. Entre em contato conosco hoje para
						discutir suas necessidades específicas.
					</h2>
					<button className="button__gradient">Começar um novo projecto</button>
				</div>
				<div className="headline__footer">
					<div className="scroll">
						<MouseSimple size={24} />
						<br />
						<span>
							scroll para <br /> baixo
						</span>
					</div>
					<div className="emblema">
						<Image
							src={'/emblema.svg'}
							height={170}
							width={170}
							alt="emblema da octoplus"
						/>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default SectionHeadline
