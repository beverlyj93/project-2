var helper = require('../config/helper');


module.exports = function (app) {
    // Basic route that sends the user first to the AJAX Page

    app.get("/api/users", function (req, res) {
        helper.selectAll('users', function (data) {
            if (data) {
                console.log(data)
                return res.json(data)
            }
        });
    })
    app.get("/api/one", function (req, res) {
        helper.selectOne('users', 'email', 'boy', function (data) {
            return res.json(data);
        })
    })
    app.post('/api/getlocation', (req, res) => {
        helper.getLocation('locations', req.body.location_type, req.body.location_climate, result => {
            return res.json({
                location_city: result[0].location_city,
                location_state: result[0].location_state,
                location_image: result[0].location_image,
                location_description: result[0].location_description,
                location_type: result[0].location_type,
                location_climate: result[0].location_climate
            });
        });
    });
}