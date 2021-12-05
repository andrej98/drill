import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Paper,
	Typography,
	LinearProgress
} from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';
// import useLocalStorage from 'use-local-storage';

type Question = {
	name: string;
	answers: {
		body: string;
		right: boolean;
	}[];
};

type Props = {
	data: Question[];
};

const Questions = (props: Props) => {
	// const [index, setIndex] = useLocalStorage('index', 0);

	// let question: Question = props.data[index >= props.data.length ? 0 : index];

	// const [checked, setChecked] = useLocalStorage<boolean[]>(
	// 	'checked',
	// 	new Array(question.answers.length).fill(false)
	// );
	// const [done, setDone] = useLocalStorage('done', false);
	// const [wrong, setWrong] = useLocalStorage<number[]>('wrong', []);
	// const [answered, setAnswered] = useLocalStorage<number[]>('answered', []);

	const [index, setIndex] = useState(0);
	let question: Question = props.data[index];
	const [checked, setChecked] = useState<boolean[]>(
		new Array(question.answers.length).fill(false)
	);
	const [done, setDone] = useState(false);
	const [wrong, setWrong] = useState<number[]>([]);
	const [answered, setAnswered] = useState<number[]>([]);

	useEffect(() => {
		question = props.data[index];
		question.answers = question.answers.sort((_a, _b) => 0.5 - Math.random());
		setDone(false);
		setChecked(new Array(question.answers.length).fill(false));
	}, [index]);

	// useEffect(() => {
	// 	console.log('now');
	// 	// reset();
	// 	// setIndex(0);
	// 	return () => {
	// 		localStorage.clear();
	// 		// localStorage.setItem('index', '0');
	// 	};
	// }, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
		setChecked(p => {
			const arr = [...p];
			arr[i] = e.target.checked;
			return arr;
		});
	};

	const reset = () => {
		setAnswered([]);
		setDone(false);
		setIndex(0);
		setChecked(new Array(question.answers.length).fill(false));
		setWrong([]);
	};

	const handleCheck = (e: FormEvent) => {
		e.preventDefault();
		setDone(true);
		if (!answered.includes(index)) {
			setAnswered(p => [...p, index]);
		}
		if (
			checked.some((element, i) => element !== question.answers[i].right) &&
			!wrong.includes(index)
		) {
			setWrong(p => [...p, index]);
		}
	};

	return (
		<>
			{answered.length !== 0 && (
				<Box sx={{ width: '100%' }}>
					<Box sx={{ width: '100%' }}>
						<LinearProgress
							variant="determinate"
							value={((answered.length - wrong.length) / answered.length) * 100}
						/>
					</Box>
					<Typography textAlign="center">
						{(
							((answered.length - wrong.length) / answered.length) *
							100
						).toFixed(2)}
						% correct answers
					</Typography>
				</Box>
			)}

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
						disabled={index === props.data.length - 1}
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
					<Button
						key={i}
						variant="contained"
						onClick={() => {
							setIndex(element);
							window.scrollTo(0, 0);
						}}
					>
						{element + 1}
					</Button>
				))}
				<Button onClick={reset}>Reset</Button>
			</Paper>
		</>
	);
};
export default Questions;
