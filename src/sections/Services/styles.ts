import styled from 'styled-components'

export const Wrapper = styled.div`
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100%;
		color: #fff;
		padding: 8rem 0;
		h1 {
			max-width: 696px;
			text-align: center;
			margin-bottom: 4rem;
		}
		.services-cards {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 32px;
			height: 100%;
		}
	}
`
