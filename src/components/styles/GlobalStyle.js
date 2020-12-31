import styled, { createGlobalStyle } from 'styled-components';
import SVG from 'react-inlinesvg';

// Estilos globales para habilitar el dark mode:
export const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${({ theme }) => theme.body};
		color:  ${({ theme }) => theme.text};	

		.dropdown_theme {
			color: ${({ theme }) => theme.text};
		}

		.modal {
			background: ${({ theme }) => theme.body};
		}
		
	}

`
export const StyledSVG = styled(SVG)`
`
export const ScrollButton = styled.button`
	pointer-events: none;
	opacity: 0;
	position: fixed;
	right: 50px;
	bottom: 60px;
	border: 0;
	padding: 0.3em;
	background: var(--clr-primary);
	color: var(--clr-light);
	transition: opacity 1000ms ease-in-out;
	border-radius: 999em;
	cursor: pointer;

	svg {
		fill: var(--clr-light);
		width: 2.5em;
		height: 2.5em;
	}

	&:hover{
		background: var(--clr-primary-dark);

		svg{
			fill: var(--clr-light);
		}
	}

	@media (max-width: 480px){
		right: 15px;
		bottom: 15px;
		padding: 0.3em;
	}
`
