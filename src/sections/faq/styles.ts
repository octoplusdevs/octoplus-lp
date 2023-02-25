import styled from 'styled-components'

export const Wrapper = styled.div`
	padding-top: 10rem;
	padding-bottom: 10rem;
	width: 100%;

	.container {
		.faq-header {
			h3 {
				color: #ffb906;
				font-size: 1.6rem;
				line-height: 2.6rem;
			}
			h2 {
				color: #fff;
				font-size: 2.4rem;
				line-height: 3.4rem;
				margin-bottom: 3.2rem;
			}
		}
		.faq-list {
			display: flex;
			flex-direction: column;
			gap: 0;
		}
	}
	@media (min-width: 768px) {
		.container {
			.faq-header {
				h3 {
					color: #ffb906;
					font-size: 1.8rem;
					line-height: 2.8rem;
				}
				h2 {
					color: #fff;
					font-size: 3.2rem;
					font-weight: 700;
					line-height: 4.2rem;
					margin-bottom: 3.2rem;
				}
			}
		}
	}
	@media (min-width: 1024px) {
		.container {
			.faq-header {
				h3 {
					color: #ffb906;
					font-size: 2.2rem;
					line-height: 3.2rem;
				}
				h2 {
					color: #fff;
					font-size: 4.2rem;
					font-weight: 700;
					line-height: 5.2rem;
					margin-bottom: 3.2rem;
				}
			}
		}
	}
`
