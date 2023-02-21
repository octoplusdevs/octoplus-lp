import styled from 'styled-components'

export const Wrapper = styled.header`
	width: 100%;
	height: 100%;
	max-height: 80px;
	/* background-color: rgb(255 255 255 / 58%); */
	background-color: #fff;
	backdrop-filter: blur(12px);
	position: fixed;
	z-index: 50;
	top: 0;
	left: 0;
	right: 0;
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.logo {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 8px;
			text-decoration: none;
			h4 {
				font-size: 2.4rem;
				font-weight: 700;
				color: #000;
			}
		}
		.menu {
			display: none;
			ul {
				list-style: none;
				.item {
					display: inline-block;
					position: relative;
					a {
						padding: 0.8rem;
						font-size: 1.6rem;
						color: #404040;
						text-decoration: none;
						transition: color 0.3s ease;
					}
					&:hover {
						a {
							color: #000;
						}
					}
					&.active {
						a {
							font-weight: 600;
							color: #000;
						}
						::after {
							content: '';
							position: absolute;
							bottom: -12px;
							height: 8px;
							left: 50%;
							width: 8px;
							transform: translateX(-50%);
							border-radius: 50%;
							background-color: #ff9c06;
						}
					}
				}
			}
		}
		.cta {
			display: flex;
			.call-to-action {
				display: none;
			}
			.button-hamburguer {
				background-color: transparent;
				border: none;
				cursor: pointer;
			}
		}
	}

	.menu-mobile {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		position: fixed;
		background-color: #202020;
		inset: 80px 0 0 0;
		border-top: 1px solid #ccc;
		padding: 4rem;
		z-index: 50;
		width: 100%;
		margin: 0 auto;
		transition: all 0.8s ease;
		height: 100vh;

		ul {
			width: 100%;
			max-width: 320px;
			.item {
				margin: 0 auto;
				list-style: none;
				position: relative;
				a {
					color: #ccc;
					padding: 1.2rem;
					width: 100%;
					display: block;
					text-decoration: none;
					text-align: justify;
				}
				&.active {
					a {
						color: #fff;
						font-weight: 700;
					}
					::before {
						content: '';
						position: absolute;
						width: 8px;
						height: 8px;
						background-color: #ff9c06;
						border-radius: 50%;
						left: -12px;
						top: 50%;
						transform: translateY(-50%);
					}
				}
			}
		}
	}
	.visible {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}
	.invisible {
		opacity: 0;
		visibility: hidden;
		transform: translateY(100%);
	}
	@media (min-width: 916px) {
		.container .menu {
			display: block;
		}
		.container .cta {
			.call-to-action {
				display: block;
			}
			.button-hamburguer {
				display: none;
			}
		}
	}
`
