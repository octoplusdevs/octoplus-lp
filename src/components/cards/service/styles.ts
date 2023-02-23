import styled from 'styled-components'

export const Wrapper = styled.div`
	background-color: #0e0e0f;
	padding: 48px 24px;
	height: 294px;
	width: 384px;
	display: flex;
	flex-direction: column;
	gap: 48px;
	border-radius: 8px;
	.content {
		display: flex;
		flex-direction: column;
		gap: 8px;
		h3 {
			font-family: Inter, sans-serif;
			font-style: normal;
			font-weight: 600;
			font-size: 24px;
			line-height: 140%;
			color: #ffffff;
		}
		p {
			font-family: Inter, sans-serif;
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 140%;
			color: #a6a6a6;
		}
	}
`
