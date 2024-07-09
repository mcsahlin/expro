const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRoutes = require('./routes/usersRoutes');
const targetsRoutes = require('./routes/targetsRoutes');
const challengesRoutes = require('./routes/challengesRoutes');
const MONGODB_URI = require('./config/db');
const { config } = require('dotenv');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('../client/public'));
	// for serving static files

app.use(cors({
	origin: '*',
	methods: 'GET, POST, PATCH, DELETE',
	allowedHeaders: 'Content-Type, Authorization',
}));



app.use('/api/users', usersRoutes);
app.use('/api/targets', targetsRoutes);
app.use('/api/challenges', challengesRoutes);

const PORT = process.env.PORT || 5000;
	
mongoose
	.connect(MONGODB_URI)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`API live on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.log('Connection failed', error);
	}) 