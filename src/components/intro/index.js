import React from 'react'
import { useSelector } from 'react-redux';

//styles ==> 
import { IntroStyled } from '../styles/styled_intro';
import { StyledLoader, StyledSVG } from '../styles/GlobalStyle';
import LightSpeed from 'react-reveal/LightSpeed';
import arrowDown from '../../assets/img/arrow-down.svg';

//strings ==>
import strings from './strings'

const Intro = () => {
	const language = useSelector(state => state.language);
	const theme = useSelector(state => state.theme);

	return (
		<IntroStyled theme={theme}>
			<LightSpeed left>
				<div className='intro-title'>
					<p>
						<span> {strings[language].title}</span>
					</p>
				</div>
			</LightSpeed>
			<LightSpeed right>
				<div className='intro-info'>
					<p>
						<span> {strings[language].info}<span className='strong'>Franco Ortiz</span>{strings[language].info2} </span>
					</p>
				</div>
			</LightSpeed>
			<LightSpeed left>
				<div className='intro-scroll'>
					<p>
						<span> {strings[language].scroll}<StyledSVG src={arrowDown} /></span>
					</p>
				</div>
			</LightSpeed>
		</IntroStyled>
	)
}

export default Intro;