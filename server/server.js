const express = require('express');
const cors = require('cors');
const connDB = require('./config/db');
const usersRoutes = require('./routes/usersRoutes');
const targetsRoutes = require('./routes/targetsRoutes');
const challengesRoutes = require('./routes/challengesRoutes');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
const app = express();
dotenv.config(); 

// Middleware
app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 
app.use(cors({
	origin: 'http://localhost:5173',
	methods: 'GET, POST, PATCH, DELETE',
	allowedHeaders: 'Content-Type, Authorization', 
	credentials: true  
}));



// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/targets', targetsRoutes);
app.use('/api/challenges', challengesRoutes);

const PORT = process.env.PORT || 5000;
	
connDB()
.then(() => {
	app.listen(PORT, () => {
		console.log(`API running on port ${PORT}`);
	});
})
.catch((error) => {
	console.log('Connection failed', error);
}) 