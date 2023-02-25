import styled from 'styled-components'

export const Wrapper = styled.div`
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100%;
		color: #fff;
		padding-top: 8rem;
		padding-bottom: 8rem;
		h1 {
			max-width: 696px;
			text-align: center;
			margin-bottom: 4rem;
			font-size: 2.4rem;
		}
		.services-cards {
			display: grid;
			grid-template-columns: 1fr;
			align-items: center;
			justify-content: center;
			gap: 32px;
			height: 100%;
			width: 100%;
			max-width: 384px;
		}
		@media (min-width: 580px) {
			h1 {
				margin-bottom: 4rem;
				font-size: 3.2rem;
			}
			.services-cards {
				max-width: 100%;
				grid-template-columns: repeat(2, 1fr);
			}
		}
		@media (min-width: 1024px) {
			.services-cards {
				max-width: 100%;
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}
`
