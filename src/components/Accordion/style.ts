import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.li`
    &:last-child{
      .header{
        border-bottom: 1.5px solid #444444;
      }
    }
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		border-top: 1.5px solid #444444;
		padding: 24px 32px;
		width: 100%;
		height: 80px;
		max-width: 1216px;
		.header__title {
			display: flex;
			align-items: center;
			gap: 2.4rem;
			span,
			p {
				font-family: 'Roboto', sans-serif;
				font-weight: 500;
				font-size: 2rem;
				line-height: 2.6rem;
				color: #fff;
			}
		}
		.header__icon {
			svg {
				color: #fff;
				transition: transform 0.3s;
				height: 3rem;
			}
		}
	}
	.acordion__content {
		max-width: 1216px;
		width: 100%;
		padding: 0 72px;
		height: 0;
		overflow: hidden;
		background-color: #1b1a1a;
		color: #fff;
		font-weight: 400;
		font-size: 1.8rem;
		line-height: 150%;
		font-family: 'Inter', sans-serif;
		transition: all 0.3s ease;
		transform: scale(0.4);
		opacity: 0;
	}
	&.open {
		.header {
			.header__icon {
				svg {
					color: #0688ff;
					transform: rotate(-180deg);
				}
			}
		}
		.acordion__content {
			height: 105px;
			padding: 24px 72px;
			transform: scale(1);
			opacity: 1;
		}
	}
`
