import { OutlinedInput, InputLabel, InputAdornment, SvgIcon} from '@mui/material'; 
import { useFormContext } from 'react-hook-form';
import { CalendarIcon } from './CalendarIcon';

interface FieldProps {
	label: string;
	placeholder: string;
	type: string;
	name: string;
};

export const Field = (props: FieldProps) => {
	const { label, placeholder, type, name } = props;
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
				},
				overflow: 'visible',
				'&::after': {
					content: name=='start' ? '" "' : null,
					position: 'absolute',
					right: '-100px',
					top: '60%',
					width: '100px',
					height: '1px',
					borderBottom: '1px dashed #FFFFFF',
					zIndex: 2,
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
					fontWeight: 700,
					fontSize: '14px',
					lineHeight: '16px',
					borderColor: "#B7BAC1",
					borderRadius: '10px',
					color: '#5C5C5C',
					zIndex: 3,
					"&:hover fieldset.MuiOutlinedInput-notchedOutline": {
						borderColor: "#3E67B7",
					},
					"&.Mui-focused": {
						borderColor: "#5C87DB",
						'.MuiSvgIcon-root path': {
								fill: '#5C87DB',
						}
					},
					'.MuiSvgIcon-root path': {
						fill: '#C5C5C5'
					},
					'& input': {
						display: 'flex',
						flexDirection: 'row-reverse',
						padding: '12px',
						marginLeft: type==='date' ? '-10px' : 0,
						// icon
						'&::-webkit-calendar-picker-indicator': {
							opacity: 0,
						},
						'&::placeholder, &::-webkit-input-placeholder': {
							color:  '#B7BAC1',
						},
						'&::-webkit-datetime-edit-text': {
							color: '#E0E1E3',
						}
					},
					
					
				}}
				id={name}
				{...register(name, {
					required: name!=="end",
				})}
				startAdornment={
					<InputAdornment
						position="start"
						sx={{position: 'absolute', top: '50%'}}>
							{type==='date' 
								? <CalendarIcon
									inheritViewBox
									sx={{ width: 16, height: 16}} /> 
								: null
							}
					</InputAdornment>}
			/>	
		</InputLabel>
	);
}