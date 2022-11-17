import { Container } from '@mui/material';
import { Button } from '../../components/Button';
import { Field } from '../../components/Field';
import styles from '../../styles/Avia.module.scss';
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

interface FormData {
  from: string;
  to: string;
  start: string;
  end: string;
}

const INITIAL_SET = {
  from: '',
  to: '',
  start: '',
	end: '',
};

export default function Avia( ) {
	const methods = useForm({defaultValues:{...INITIAL_SET}});
	const { handleSubmit, formState: {isValid} } = methods;
	const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
  };

	return (
		<Container>
			<FormProvider {...methods}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)} onChange={()=> console.log(isValid)}>
					<div className={styles.row}>
						<Field
							type="text"
							label="Откуда:" placeholder="Город вылета" name="from" />
						<Field
							type='text'
							label="Куда:"
							placeholder="Город прилета"
							name="to" />
						<Field
							type='date'
							label="Туда:"
							placeholder="дд.мм.гг"
							name="start" />
						<Field
							type='date'
							label="Обратно:"
							placeholder="дд.мм.гг"
							name="end" />
					</div>
					<div className={styles.form__bottom}>
						<Button type="submit" disabled={!isValid}>Найти билеты</Button>
					</div>
				</form>
			</FormProvider>
		</Container>
	)
}