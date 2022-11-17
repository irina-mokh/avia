import { Button as MUIButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

interface BtnProps {
	children: React.ReactNode;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
}
const ButtonStyled = styled(MUIButton)({
	height: '40px',
  backgroundColor: '#5C87DB',
	color: '#FFFFFF',
	borderRadius: '10px',
	cursor: 'pointer',
	fontSize: '14px',
	lineHeight: '140%',
	padding: '14px 32px',
	'&:hover': {
		backgroundColor: '#3E67B7',
	},
	'&:active': {
		color:'#FFFFFF80',
	},
	'&.Mui-disabled': {
		backgroundColor: '#B7BAC1',
		color: '#FFFFFF',
	}

});
export const Button = (props: BtnProps) => {
	const {children, type, disabled} = props;
	return <ButtonStyled type={type} disabled={disabled}>{children}</ButtonStyled>
}