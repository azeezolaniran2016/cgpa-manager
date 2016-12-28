/**
 * function to set up the routes for an 
 * express app.
 * @param{express} app - express app for which we
 * want to set up the routes;
 * @return{undefined}
 */
module.exports = (app) => {
	// route for the homepage
	app.get('/', (req, res) => {
		req.sendFile('index.html');
	});
};
