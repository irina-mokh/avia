import { InputLabel, Typography } from '@mui/material';

interface FlightVarProps {
	index: number;
	departure: string;
	arrival: string;
}

export const FlightVar = (props: FlightVarProps) => {
	const {index, departure, arrival} = props;
	return (
		<InputLabel htmlFor={String(index)}
			sx={{
				border: '1px solid #B7BAC1',
				padding: '4px 8px',
				borderRadius: '10px',
				fontWeight: '700',
				color: '#232323',
				marginRight: '17px'
			}}>
			<Typography
				sx={{
					display: 'inline-block',
					fontSize: '13px',
				}}>
					{departure}
			</Typography>
			<span>-</span>
			<Typography
				sx={{
					display: 'inline-block',
					fontSize: '10px',
				}}>
					{arrival}
			</Typography>
			<input type="radio" id={String(index)} value={index} name='flights' style={{display: 'none'}}></input>
		</InputLabel>
	)
}