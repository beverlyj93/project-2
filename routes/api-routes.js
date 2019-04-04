var helper = require('../config/helper');


module.exports = function (app) {
    // Basic route that sends the user first to the AJAX Page

    app.get("/api/users", function (req, res) {
        helper.selectAll( 'users',function (data) {
        if (data) {
            console.log(data)
            return res.json(data)
        }
        });
    })
    app.get("/api/one", function (req, res) {
        helper.selectOne('users', 'email','boy', function(data) {
            return res.json(data);
        } )
    })
    app.get('/api/test', (req, res) => {
        res.json('all dis data');
    })
    app.post('/api/getlocation', (req, res) => {
        // helper.query('SELECT `location_name` FROM `locations` WHERE `location_type` = ? AND `location_climate` = ?', [req.body.locationType, req.body.locationClimate], result => {
        //     res.json(result);
        // })
        return res.json({
            location_city: 'Dallas',
            location_state: 'Texas',
            location_image: 'http://ontheworldmap.com/usa/united-states-map-max.jpg',
            location_description: 'This is the worlds best country to live in, by far.',
            location_type: 'Historic',
            location_climate: 'Warm'
        })
    })
};