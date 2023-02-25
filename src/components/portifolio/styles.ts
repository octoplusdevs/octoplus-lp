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
		padding: 0 0.8rem;
		.image {
			background-color: #1f1f1f;
			width: 100%;
			height: 256px;
			border-radius: 12px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.description {
			display: flex;
			justify-content: flex-start;
			gap: 24px;
			flex-direction: column;
			.title {
				font-family: 'Inter', sans-serif;
				color: #ffffff;

				h2 {
					font-weight: 600;
					font-size: 2.2rem;
					line-height: 3.2rem;
				}
				p {
					font-weight: 400;
					font-size: 1.6rem;
					line-height: 2.2rem;
					color: rgba(255, 255, 255, 0.5);
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
	@media (min-width: 580px) {
		.element .description .title {
			h2 {
				font-size: 2.4rem;
			}
		}
	}
	@media (min-width: 768px) {
		.element .image {
			height: 382px;
		}
	}
	@media (min-width: 1024px) {
		.element {
			padding: 0 2.4rem;
			max-width: 900px;

			.image {
				height: 452px;
			}
			.description .title {
				h2 {
					font-size: 3.2rem;
					line-height: 4.2rem;
				}
			}
		}
	}
`
