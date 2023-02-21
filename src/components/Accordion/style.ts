import styled, { css } from 'styled-components'

interface PropsTypes {
	openAcordion: boolean
}



export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	color: #fff;
	margin: 0 auto;
`

export const HeaderAccordion = styled.header<PropsTypes>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	border: 1.5px solid #444444;
	padding: 2.4rem 3.2rem;
	width: 100%;
	max-width: 121.6rem;
	.accordion-icon{
		transition: transform 0.3s;
		height: 3rem;
	}

	.header-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2.4rem;

		span,
		p {
			font-family: 'Roboto', sans-serif;
			font-weight: 500;
			font-size: 2.2rem;
			line-height: 2.6rem;
		}
	}

	${(props) =>
		props.openAcordion &&
		css`
			& {
				color: #0688ff;
				.accordion-icon{
					transform: rotate(-180deg);
				}
			}
		`}
`

export const AccordionContent = styled.div<PropsTypes>`
	max-width: 1216px;
	width: 100%;
	background-color: #1b1a1a;
	transition: opacity 0.5s;
	transition: padding 0.5s;
	opacity: 0;
	P {
		display: none;
		font-weight: 400;
		font-size: 1.8rem;
		line-height: 150%;
		font-family: 'Inter', sans-serif;
	}
	${(props) =>
		props.openAcordion &&
		css`
			opacity: 1;
			padding: 2.4rem 7.2rem;
			p {
				display: flex;
			}
		`}
`
