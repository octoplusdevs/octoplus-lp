import BallonItem from '@/components/ballonItem'
import uuid from 'react-uuid'
import React from 'react'
import { Wrapper } from './styles'

interface tagsType {
	Title: string
	Description: string
}

interface propsType {
	Tags: tagsType[]
	Title: string
	Type: string
	ImagePath: string
}

function Portifolio(props: propsType) {
	const { Title, Type, Tags, ImagePath } = props
	return (
		<Wrapper>
			<div className="element">
				<div className="image">
					<img src={ImagePath} alt={Title} />
				</div>
				<div className="description">
					<div className="title">
						<h2>{Title}</h2>
						<p>{Type}</p>
					</div>
					<ul style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
						{Tags.map(({ Description, Title }) => (
							<BallonItem
								key={uuid()}
								Description={Description}
								Title={Title}
							/>
						))}
					</ul>
				</div>
				<button>Abrir o projecto</button>
			</div>
		</Wrapper>
	)
}

export default Portifolio
