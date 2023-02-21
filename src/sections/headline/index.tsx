import BallonItem from '@/components/ballonItem'
import Image from 'next/image'
import { MouseSimple } from 'phosphor-react'
import { Wrapper } from './styles'

function Headline() {
	return (
		<Wrapper>
			<div className="container">
				<div className="content">
					<h1>
						Criamos <span>soluções inovadoras</span> para o seu negócio.
					</h1>
					<h2>
						Posicione sua empresa de maneira que não passe despercebida e
						consiga transmitir sua mensagem de forma clara e objetiva.
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

export default Headline
