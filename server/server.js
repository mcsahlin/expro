const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/db');
const usersRoutes = require('./routes/usersRoutes');
const targetsRoutes = require('./routes/targetsRoutes');
const challengesRoutes = require('./routes/challengesRoutes');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const auth = require('./middlewares/auth');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

app.use(express.json({ extended: false })); // Initialize body parser to enable reading of request body

// Enable CORS
app.use(
	cors({
		origin: '*',
		methods: 'GET, POST, PATCH, DELETE',
		allowedHeaders:
			'Content-Type, Authorization, Origin, X-Requested-With, Accept',
	})
);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', auth, usersRoutes);
app.use('/api/targets', auth, targetsRoutes);
app.use('/api/challenges', auth, challengesRoutes);

const PORT = process.env.PORT || 5000;

connectDatabase()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`API running on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.log('Connection failed', error);
	});
