require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors')

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use(router);


app.listen(PORT, console.log(`Server running on port ${PORT}`));