import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Paper,
	Typography
} from '@mui/material';
import { FormEvent, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

import questions from '../data';

type Question = {
	name: string;
	answers: {
		body: string;
		right: boolean;
	}[];
};
const Questions = () => {
	const [index, setIndex] = useLocalStorage('index', 0);
	let question = questions[index];
	const [checked, setChecked] = useLocalStorage<boolean[]>(
		'checked',
		new Array(question.answers.length).fill(false)
	);
	const [done, setDone] = useLocalStorage('done', false);
	const [wrong, setWrong] = useLocalStorage<number[]>('wrong', []);

	useEffect(() => {
		question = questions[index];
		setDone(false);
		setChecked(new Array(question.answers.length).fill(false));
	}, [index]);

	useEffect(() => {
		console.log(checked);
	}, [checked]);

	const handleChange = (e: any, i: number) => {
		setChecked(p => {
			const arr = [...p];
			arr[i] = e.target.checked;
			return arr;
		});
	};

	const reset = () => {
		setDone(false);
		setIndex(0);
		setChecked(new Array(question.answers.length).fill(false));
		setWrong([]);
	};

	const handleCheck = (e: FormEvent) => {
		e.preventDefault();
		setDone(true);
		if (
			checked.some((element, i) => element !== question.answers[i].right) &&
			!wrong.includes(index)
		) {
			setWrong(p => [...p, index]);
		}
	};

	return (
		<>
			<Paper
				component="form"
				onSubmit={handleCheck}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					p: 4,
					gap: 2
				}}
			>
				<Typography variant="h4" component="h2" textAlign="center" mb={3}>
					{`${index + 1}: ${question.name}`}
				</Typography>
				{question.answers.map((answer, i) => (
					<FormControlLabel
						key={answer.body}
						control={
							<Checkbox
								checked={checked[i] || false}
								onChange={e => handleChange(e, i)}
							/>
						}
						sx={{
							color: done
								? question.answers[i].right
									? 'green'
									: undefined
								: undefined
						}}
						label={answer.body}
					/>
				))}

				<Button type="submit" sx={{ alignSelf: 'flex-end', mt: 2 }}>
					Check
				</Button>
				<Box sx={{ display: 'flex' }}>
					<Button
						disabled={index === 0}
						onClick={() => setIndex(p => p - 1)}
						type="button"
						sx={{ alignSelf: 'flex-start', mt: 2 }}
					>
						Previous question
					</Button>
					<Button
						disabled={index === questions.length - 1}
						onClick={() => setIndex(p => p + 1)}
						type="button"
						sx={{ alignSelf: 'flex-end', mt: 2 }}
					>
						Next question
					</Button>
				</Box>
			</Paper>
			<Paper
				component="div"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '100%',
					p: 4,
					gap: 2
				}}
			>
				<Typography>Wrong answers:</Typography>
				{wrong.map((element, i) => (
					<Button key={i} variant="contained" onClick={() => setIndex(element)}>
						{element + 1}
					</Button>
				))}
				<Button onClick={reset}>Reset</Button>
			</Paper>
		</>
	);
};
export default Questions;
