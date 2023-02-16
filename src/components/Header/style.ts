import styled, { css } from 'styled-components'

interface PropsTypes {
	activeMenuMobile: boolean
}

export const HeaderContainer = styled.header`
	width: 100%;
	background-color: #fff;
`

export const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	width: 100%;
	max-width: 128.6rem;
	margin: 0 auto;
	padding: 0px 1.5rem;
	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		img {
			width: 100%;
			max-width: 2.2rem;
			height: 3.2rem;
		}
		h4 {
			font-weight: 700;
			font-size: 2.4rem;
			line-height: 2.9rem;
			font-family: 'Inter', sans-serif;
		}
	}

	.menu-desktop {
		display: none;
		justify-content: space-between;
		width: 63%;
	}

	nav {
		display: flex;
		align-items: center;
		gap: 1.6rem;
		a {
			font-weight: 400;
			font-size: 1.6rem;
			line-height: 1.9rem;
			color: #0c0c0c;
			transition: all 0.3s;
			text-decoration: none;
			font-family: 'Inter', sans-serif;
			cursor: pointer;
			&:hover {
				color: #000;
			}
			&.active {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: 600;
				&::after {
					content: '';
					position: absolute;
					width: 20%;
					height: 0.8rem;
					background-color: #ff9c06;
					bottom: -1.8rem;
					border-radius: 50%;
				}
			}
		}
	}

	.menu-hamburguer {
		cursor: pointer;
		height: 4rem;
		.hamburguer {
			appearance: none;
			width: 50px;
			height: 5px;
			background-color: #000;
			position: relative;
			top: -0.4rem;
			::after {
				content: '';
				position: absolute;
				width: 40px;
				height: 4.6px;
				background-color: #000;
				bottom: -1.1rem;
				right: 0;
				transition: all 0.3s;
			}
			::before {
				content: '';
				position: absolute;
				width: 30px;
				height: 5px;
				background-color: #000;
				bottom: -2.2rem;
				right: 0;
				transition: all 0.3s;
			}

			&:checked {
				top: 0;
				background-color: #fff;
				::after {
					transform: rotate(140deg);
					width: 4rem;
					top: 0.8rem;
					height: 4px;
				}
				::before {
					transform: rotate(-140deg);
					width: 4rem;
					height: 4px;
					top: 0.8rem;
				}
			}
		}
	}

	@media (min-width: 999px) {
		.menu-desktop {
			display: flex;
		}
		.menu-hamburguer {
			display: none;
		}
	}
`

export const MenuMobile = styled.div<PropsTypes>`
	display: flex;
	align-items: flex-start;
	width: 100%;
	position: absolute;
	transition: all 0.3s;
	opacity: 0;
	pointer-events: none;
	nav {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 4.6rem;
		background-color: #000;
		width: 100%;
		height: 100vh;
		position: absolute;
		z-index: 1;
		a {
			font-weight: 400;
			font-size: 1.6rem;
			line-height: 1.9rem;
			color: #fff;
			transition: all 0.3s;
			cursor: pointer;
			font-family: 'Inter', sans-serif;
			text-decoration: none;
			&:hover {
				color: #fff;
			}
			&.active {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: 600;
				&::after {
					content: '';
					position: absolute;
					width: 20%;
					height: 0.8rem;
					background-color: #ff9c06;
					bottom: -1.8rem;
					border-radius: 50%;
				}
			}
		}
	}

	@media (min-width: 999px) {
		& {
			display: none;
		}
	}

	${(props) =>
		props.activeMenuMobile &&
		css`
			opacity: 1;
			pointer-events: all;
		`}
`
