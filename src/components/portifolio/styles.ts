import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	flex-direction: column;
	/* background-color: #0c0c0c; */
	position: sticky;
	top: 0;
	transition: all 0.8s ease;
	z-index: 1;
	.element {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		gap: 24px;
		.image {
			background-color: #1f1f1f;
			width: 100%;
			height: 515px;
			border-radius: 12px;
		}
		.description {
			display: flex;
			justify-content: flex-start;
			gap: 24px;
			flex-direction: column;
			.title {
				h2 {
					font-family: 'Inter', sans-serif;
					font-style: normal;
					font-weight: 600;
					font-size: 48px;
					line-height: 58px;
					color: #ffffff;
				}
				p {
					font-family: 'Inter', sans-serif;
					font-style: normal;
					font-weight: 500;
					font-size: 18px;
					line-height: 16px;
					color: #ffffff;
				}
			}
		}
		button {
			padding: 18px 24px;
			background-color: #ffb906;
			border: none;
			cursor: pointer;
			color: #000;
			font-family: 'Inter', sans-serif;
			font-style: normal;
			font-weight: 500;
			font-size: 18px;
			line-height: 16px;
			width: fit-content;
			border-radius: 4px;
		}
	}
`
