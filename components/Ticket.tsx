import Image from 'next/image';
import { Typography, Box } from "@mui/material";

import { FormProps } from '../pages/avia';

import { TicketDetails } from '../pages/avia/info';
import { FlightPoint } from './FlightPoint';
import { FlightVar } from './FlightVar';
import { HandLuggageIcon} from './HandLuggageIcon';
import { BaggageIcon } from './BaggageIcon';

interface TicketProps extends FormProps {
	flights: Array<TicketDetails>;
	index: number;
	handleChange: (i: number)=> void;
	back?: boolean;
}

export const Ticket = (props: TicketProps) => {
	const { from, to, start, end, flights, index, back} = props;
	const flight = flights[index];

	const [hrDur, minDur] = flight.duration.split('-');
	const [hr, min] = flight.start.split(':');
	const date = new Date(start);
	const arrival = new Date(date.getFullYear(), date.getMonth(), date.getDate(), Number(hr) + Number(hrDur), Number(min) + Number(minDur) );

	const variants = flights.map((flight, i) => {
		const [hrDur, minDur] = flight.duration.split('-');
		const [hr, min] = flight.start.split(':');
		const date = new Date(start);
		const arrival = new Date(date.getFullYear(), date.getMonth(), date.getDate(), Number(hr) + Number(hrDur), Number(min) + Number(minDur));
		return (
			<li key={flight.id} style={{listStyle: 'none'}}>
				<FlightVar
					id={flight.id}
					name={'flights' + (back ? '2' : '1')}
					index={i}
					departure={flight.start}
					arrival={arrival.getHours() + ':' + arrival.getMinutes()}
					handleChange={props.handleChange}
					active={index==i} />
			</li>
		)
	})

	return(
		<Box sx={{
			display: 'flex',
			minHeight: '200px',
			color: '#5C5C5C',
		}}>
			{/* Air company */}
			<Box sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
				width: '20%'
			}}>
				<Image src={require('../assets/images/logos/s7.png')} alt="logo" width="39" height="39" ></Image>
				<Typography
					sx={{
						color: '#5C5C5C',
						fontSize: '18px',
						lineHeight: '21px',
					}}
				>
					S7 Airlines
				</Typography>
				{!flight.return && 
					<Typography
						sx={{
							position: 'absolute',
							top: 0,
							left: 0,
							backgroundColor: '#8BA5D8',
							color: '#FFFFFF',
							padding: '6px 24px',
							borderRadius: '15px 0px',
						}}
					>
						Невозвратный
					</Typography>
				}
			</Box>
			{/* Details */}
			<Box flexDirection="column" sx={{display: 'flex', padding: '0 25px', borderTop: back ? '1px dashed #5C87DB' : 'none',
			}} width="100%">
				<Box flexGrow={1} justifyContent='space-between' alignItems='center' width="100%" sx={{display: 'flex'}}>
					{/* Flight description */}
					{/* departure */}
					<FlightPoint time={flight.start} city={from} date={start}></FlightPoint>
					{/*flight thumb-line */}
					<Box flexGrow={1}>
						<Box justifyContent='space-between' alignItems='center' flexGrow={1} sx={{display: 'flex', padding: '0 28px'}} color='#B7BAC1'>
							<Typography sx={{
								position: 'relative',
								top: '-20px',
								}}
							>
								SVO
							</Typography>
							<Box
								sx={{
									borderTop: '1px solid #B7BAC1',
									flexGrow: 1,
									margin: '0 -20px',
									padding: '0 28px',
									position: 'relative',
									'&::after, &::before': {
										position: 'absolute',
										top: '-5px',
										content: '" "',
										width: '8px',
										height: '8px',			
										background: '#C4C4C4',
										borderRadius: '50%'
									},
									'&::before': {
										left: 0,
									},
									'&::after': {
										right: 0,
									},
								}}>
							</Box>
							<Typography sx={{
								position: 'relative',
								top: '-20px',
								}}
							>
								ROV
							</Typography>
						</Box>
						<Typography color='#B7BAC1' textAlign="center">{`В пути ${hrDur} ч ${minDur} мин`}</Typography>
					</Box>
					{/* arrival */}
					<FlightPoint time={arrival.getHours() + ':' + arrival.getMinutes()} city={to} date={arrival.getFullYear() + '-' + arrival.getMonth() + '-' + arrival.getDate()}></FlightPoint>
					<Box sx={{margin: '0 20px'}}>
						<HandLuggageIcon inheritViewBox sx={{ width: 20, height: 20}} />
						<BaggageIcon inheritViewBox sx={{ width: 20, height: 38, marginLeft: '5px'}} />
					</Box>
				</Box>
				{/* Flight time variants */}
				<Box component='ul' sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end',padding: 0}}>{variants}</Box>
			</Box>
		</Box>
	)
}