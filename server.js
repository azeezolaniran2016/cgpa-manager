// load dependencies
const express = require('express');
const path = require('path');
const routes = require('./config/routes');
// create express app
const app = express();
// static pages middleware
app.use(express.static(path.join(__dirname, 'public')));
// middle ware for logging output
app.use((req, res, next) => {
	console.log(`${req.hostname} connected`);
	next();
});
// setup routes for the app
routes(app);
// start listening on port 3000
app.listen(process.env.PORT || 3000, (req, res) => {
	console.log(`Server listening on port 3000 \n
	`);
});