import { Box, Typography } from '@mui/material';

export const FlightPoint = (props: { time: string, city: string, date: string}) => {
	const { time, city, date} = props;
	return (
		<Box color="#5C5C5C" fontSize="10px" sx={{paddingTop:'28px'}}>
			<Typography color="#232323" fontSize="22px" fontWeight='700' marginBottom="17px">{time}</Typography>
			<Typography>{city}</Typography>
			<Typography>{(new Date(date)).toLocaleDateString()}</Typography>
		</Box>
	)
}