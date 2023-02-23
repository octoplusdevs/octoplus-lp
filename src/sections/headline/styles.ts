import styled from 'styled-components'

export const Wrapper = styled.div`
	min-height: 810px;
	height: 100%;
	background-color: #000;
	background-image: url('/background_headline.png');
	background-repeat: repeat;
	background-position: 60% 90%;
	background-size: cover;
	padding-top: 100px;

	display: flex;
	justify-content: center;
	align-items: center;
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100%;
		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 24px;
			h1 {
				font-size: 2.6rem;
				font-family: 'Inter', sans-serif;
				font-weight: 300;
				line-height: 120%;
				text-align: center;
				color: #fff;
				span {
					font-weight: 700;
				}
			}
			h2 {
				font-family: 'roboto', sans-serif;
				font-weight: 400;
				font-size: 1.4rem;
				display: none;
				max-width: 85%;
				line-height: 140%;
				text-align: center;
				color: #ffffff;
				opacity: 0.64;
			}
			.button__gradient {
				/* background: linear-gradient(89.66deg, #06a5ff -6.56%, #ffb906 106.09%); */
				color: #000;
				background-color: #ffb906;
				border-radius: 4px;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				padding: 22px 24px;
				gap: 8px;
				margin-top: 56px;
				font-family: 'Roboto', sans-serif;
				font-weight: 600;
				font-size: 16px;
				line-height: 22px;
				cursor: pointer;
				border: none;
				transition: all 0.2s ease;

				&:hover {
					background-color: #202020;
					color: #fff;
					border: 0.4px solid rgba(255, 255, 255, 0.2);
				}
			}
		}
		.headline__footer {
			display: none;
			margin-top: 40px;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			.scroll {
				color: #fff;
				font-size: 1.6rem;
			}
		}
	}
	@media (min-width: 768px) {
		.container {
			.content {
				h1 {
					font-size: 4.2rem;
				}
				h2 {
					display: block;
					font-size: 2rem;
					line-height: 3rem;
				}
			}
		}
	}
	@media (min-width: 1024px) {
		.container {
			.content {
				h1 {
					font-size: 5.6rem;
				}
				h2 {
					display: block;
					font-size: 2.2rem;
					line-height: 3.2rem;
				}
			}
		}
	}
`
