import styles from '../../styles/Avia.module.scss';
import { Container } from '@mui/material';
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import Link from 'next/link';

import { Button } from '../../components/Button';
import { Field } from '../../components/Field';

export interface FormProps{
  from: string;
  to: string;
  start: string;
  end?: string;
}

const INITIAL_SET = {
  from: '',
  to: '',
  start: '',
	end: '',
};

export default function Avia( ) {
	const methods = useForm({defaultValues:{...INITIAL_SET}});
	const { watch, formState: {isValid} } = methods;

	return (
		<Container>
			<FormProvider {...methods}>
				<form className={styles.form}>
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
					<Link href={{
              pathname: '/avia/info',
              query: {...watch()},
            }}>
						<Button type="submit" disabled={!isValid}>Найти билеты</Button>
					</Link>
					</div>
				</form>
			</FormProvider>
		</Container>
	)
}