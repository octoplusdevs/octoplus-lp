import styled from 'styled-components'

export const Wrapper = styled.div`
	min-height: 810px;
	height: 100vh;
	background-color: #232529;
	padding-top: 100px;
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
				font-size: 2.4rem;
				font-family: 'Inter';
				font-style: normal;
				font-weight: 300;
				line-height: 120%;
				text-align: center;
				letter-spacing: 0.08em;
				color: #ffffff;
				span {
					font-weight: 700;
				}
			}
			h2 {
				font-family: 'Inter';
				font-style: normal;
				font-weight: 400;
				font-size: 1.4rem;
				line-height: 140%;
				text-align: center;
				letter-spacing: 0.08em;
				color: #ffffff;
			}
			.button__gradient {
				background: linear-gradient(89.66deg, #06a5ff -6.56%, #ffb906 106.09%);
				border-radius: 4px;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				padding: 22px 24px;
				gap: 8px;
				max-width: 332px;
				width: 100%;
				height: 66px;
				margin-top: 56px;
				font-family: 'Inter';
				font-weight: 600;
				font-size: 18px;
				line-height: 22px;
				cursor: pointer;
				border: none;
			}
		}
		.headline__footer {
			margin-top: 40px;
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.scroll {
				color: #fff;
				font-size: 1.6rem;
			}
		}
	}
`
