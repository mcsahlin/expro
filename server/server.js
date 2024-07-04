import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

const DEV_TARGETS = [];

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);

	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PATCH, DELETE, OPTIONS'
	);

	next();
});

app.get('/', (req, res) => {
	res.send('API is running . . .');
});

app.get('/login', (req, res) => {
	res.send('Login Page');
});

app.get('/targets/user/:uid', (req, res, next) => {
	res.send('Targets Page');
	res.status(200).json({
		message: 'Targets fetched successfully',
	});
});

app.get('/targets/user/:id/:tid', (req, res, next) => {
	res.send(DEV_TARGETS);
	res.status(200).json({
		message: 'Target fetched successfully',
	});
});

app.post('/targets/user/:id', (req, res, next) => {
	res.send('Target Page');

	const { title, description, date } = req.body;

	if (
		!title ||
		title.trim().length === 0 ||
		!description ||
		description.trim().length === 0 ||
		!date ||
		date.trim().length === 0
	) {
		return res.status(400).json({
			message: 'Invalid input',
		});
	} else {
		const newTarget = {
			id: DEV_TARGETS.length + 1,
			title,
			description,
			date,
		};
		DEV_TARGETS.push(newTarget);
		res.status(201).json({
			message: 'Target created successfully',
		});
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
