import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { FormProps } from '.';
import { Typography, Card, Container, Box } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { Ticket } from '../../components/Ticket';

export interface TicketDetails {
	id: string;
	start: string;
	duration: string;
	price: number;
	return: boolean;
}
const FLIGHTS1 = [
	{
		id: '001',
		start: '9:20',
		duration: '1-55',
		price: 4150,
		return: false,
	},
	{
		id: '002',
		start: '10:20',
		duration: '1-55',
		price: 5880,
		return: true,
	},
	{
		id: '003',
		start: '11:20',
		duration: '1-55',
		price: 3850,
		return: false,
	},
];

const FLIGHTS2 = [
	{
		id: '004',
		start: '22:57',
		duration: '1-55',
		price: 4150,
		return: false,
	},
	{
		id: '005',
		start: '18:20',
		duration: '1-55',
		price: 5150,
		return: false,
	},
	{
		id: '006',
		start: '16:20',
		duration: '1-55',
		price: 6150,
		return: true,
	},
];

export default function Info(props: FormProps) {
	const { from, to, start, end} = props;

	const [thereIndex, setThereIndex] = useState(0);
	const [backIndex, setBackIndex] = useState(0);

	return (
		<Container sx={{paddingTop: '68px'}}>
			<Typography variant='h2' sx={visuallyHidden}>Flights info</Typography>
			<Card sx={{
				display: 'flex',
				boxShadow: '0px 0px 14px rgba(112, 121, 153, 0.3)',
				borderRadius: '15px',
				fontFamily: 'Roboto',
			}}>
				<Box flexGrow={1}>
					<Ticket {...props} flights={FLIGHTS1} index={thereIndex} handleChange={setThereIndex}/>
					{/* back ticket */}
					{end && <Ticket from={to} to={from} start={end} flights={FLIGHTS2} index={backIndex} handleChange={setBackIndex} back={true} />}
				</Box>
				{/* Price */}
				<Typography
					sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontWeight: '700',
					fontSize: '32px',
					lineHeight: '38px',
					color: '#232323',
					width: '20%',
					position: 'relative',
					'&::before': {
						content: '" "',
						position: 'absolute',
						left: 0,
						width: '1px',
						height: '100%',
						backgroundColor: '#DDE3EE',
					}
				}}>
					{FLIGHTS1[thereIndex].price + (end ? FLIGHTS2[backIndex].price : 0)}
					<span style={{paddingLeft: '5px'}}>&#8381;</span>
				</Typography>
			</Card>
		</Container>
	)
}

export const getServerSideProps = async (context : GetServerSidePropsContext) => {
  const {from, to, start, end} = context.query;
	return {
    props: {from, to, start, end}
  }
}