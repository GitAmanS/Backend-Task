const express = require('express');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');
const taskRoutes = require('./routes/taskRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use(cookieParser());

app.use('/api', taskRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
