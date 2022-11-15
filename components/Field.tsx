import { OutlinedInput, InputLabel, InputAdornment, SvgIcon} from '@mui/material'; 
import CalIcon from '../assets/images/calendar.svg';
import { useFormContext } from 'react-hook-form';

interface FieldProps {
	label: string;
	placeholder: string;
	type: string;
	name: string;
};

export const Field = (props: FieldProps) => {
	const { label, placeholder, type } = props;
	const { register } = useFormContext();

	return (
		<InputLabel
			htmlFor={props.name}
			sx={{
				display: 'block',
				fontWeight: '400',
				fontSize: '11px',
				lineHeight: '13px',
				color: '#FFFFFF',
				width: '208px',
				"&.Mui-focused": {
					color: "#5C87DB",
				}
				
			}}>
			{label}
			<OutlinedInput
				className="input"
				type={type}
				placeholder={placeholder}
				sx={{
					backgroundColor: '#FFFFFF',
					display: 'block',
					height: '40px',
					fontWeight: 700,
					fontSize: '14px',
					lineHeight: '16px',
					borderColor: "#B7BAC1",
					borderRadius: '10px',
					color: '#5C5C5C',
					"&:hover fieldset.MuiOutlinedInput-notchedOutline": {
						borderColor: "#3E67B7",
					},
					"&:focus": {
						borderColor: "#5C87DB",
						'input': {
							'&::-webkit-calendar-picker-indicator': {
								filter: 'filter: invert(56%) sepia(13%) saturate(4834%) hue-rotate(197deg) brightness(91%) contrast(87%)',
							},
						}
					},
					'& input': {
						flexDirection: 'row-reverse',
						padding: '12px',
						// icon
						'&::-webkit-calendar-picker-indicator': {
							opacity: 1,
							backgroundImage: CalIcon,
							backgroundSize: '100% 100%',
							filter: 'invert(100%) sepia(0%) saturate(3644%) hue-rotate(78deg) brightness(72%) contrast(129%)',
						},
					},
					'&:placeholder':{
						color: '#3B7BAC1',
					},
					
				}}
				id={props.name}
				{...register(props.name, {
					required: 'required field',
				})}
				// startAdornment={<InputAdornment position="start">{type==='date' ? <CalIcon /> : null }</InputAdornment>}
			/>
		</InputLabel>
	);
}