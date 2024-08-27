const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const apiRoutes = require('./routes'); // 引入統一的路由入口

dotenv.config();
connectDB();

const app = express();

app.use(require('cors')())
app.use(express.json())
app.use('/api/rest', apiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});