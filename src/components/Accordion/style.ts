import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.li`
	width: 100%;
	list-style: none;
	&:last-child {
		.header {
			border-bottom: 1.5px solid #444444;
		}
	}
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		border-top: 1.5px solid #444444;
		padding: 1.6rem 0.8rem;
		width: 100%;
		/* height: 80px; */
		.header__title {
			display: flex;
			align-items: center;
			gap: 1.6rem;
			span,
			p {
				font-family: 'Roboto', sans-serif;
				font-weight: 500;
				font-size: 1.6rem;
				line-height: 2.6rem;
				color: #fff;
			}
			span {
				color: #444444;
			}
		}
		.header__icon {
			svg {
				color: #fff;
				transition: transform 0.3s;
			}
		}
	}
	.acordion__content {
		width: 100%;
		padding: 0 0.8rem;
		height: 0;
		position: relative;
		overflow: hidden;
		background-color: #1b1a1a;
		color: #fff;
		font-weight: 400;
		font-size: 1.6rem;
		line-height: 150%;
		font-family: 'Inter', sans-serif;
		transition: all 0.3s ease;
		transform: scale(0.4);
		opacity: 0;
	}
	&.open {
		.header {
			.header__title p {
				color: #0688ff;
			}
			.header__icon {
				svg {
					color: #0688ff;
					transform: rotate(-180deg);
				}
			}
		}
		.acordion__content {
			min-height: 105px;
			height: auto;
			padding: 0.8rem 3.2rem;
			overflow-wrap: break-word;
			transform: scale(1);
			opacity: 1;
		}
	}
	@media (min-width: 768px) {
		.header {
			.header__title {
			}
		}
	}
`
