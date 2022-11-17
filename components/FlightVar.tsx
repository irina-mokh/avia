import React from 'react';
import { InputLabel, Typography } from '@mui/material';

interface FlightVarProps {
	index: number;
	departure: string;
	arrival: string;
	active: boolean;
	handleChange: (e: number) => void;
	name: string;
	id: string;
}

export const FlightVar = (props: FlightVarProps) => {
	const {index, departure, arrival, active, name, id} = props;
	return (
		<>
			<input type="radio" id={id} value={index} name={name} style={{display: 'none'}} checked={active} onChange={(e) => props.handleChange(Number(e.target.value))}></input>
			<InputLabel htmlFor={id}
				sx={{
					border: '1px solid #B7BAC1',
					padding: '4px 3px',
					borderRadius: '10px',
					color: '#5C5C5C',
					marginRight: '17px',
					'input:checked+&': {
						backgroundColor: '#DDE3EE',
						padding: '6px 10px',
						color: '#232323',
					}
				}}
			>
				<Typography
					sx={{
						display: 'inline-block',
						fontSize: '16px',
						fontWeight: '600',
					}}>
						{departure}
				</Typography>
				<span style={{padding: '0 5px'}}>-</span>
				<Typography
					sx={{
						display: 'inline-block',
						fontSize: '12px',
						fontWeight: '600',
					}}>
						{arrival}
				</Typography>
			</InputLabel>	
		</>
	)
}