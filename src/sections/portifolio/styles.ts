import styled from 'styled-components'

export const Wrapper = styled.div`
	min-height: 810px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #0c0c0c;
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100%;
		h1 {
			max-width: 696px;
			text-align: center;
			margin-bottom: 4rem;
			color: #fff;
			font-size: 2.2rem;
		}
		@media (min-width: 580px) {
			h1 {
				margin-bottom: 4rem;
				font-size: 3.2rem;
			}
		}
		@media (min-width: 1024px) {
		}
	}
`
