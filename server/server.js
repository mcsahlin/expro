const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
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



app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
	
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`API live on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.log('Connection failed', error);
	}) 