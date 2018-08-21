const unirest = require('unirest');
const io = require('socket.io');
const server = require("../../server");
console.log(server);

module.exports = {
    getCrimes: function(req, res, io) {
        // These code snippets use an open-source library. http://unirest.io/nodejs
        unirest.get("https://yourmapper2.p.mashape.com/markers?center=0&f=json&id=182&lat=41.881&lon=-87.623&num=500&start=2015-11-22&end=2015-11-22")
        // Put api key here
        .header("X-Mashape-Key", "fNutKhjM8Smshcjz2VSdocmRagjMp1ro8g6jsnnRhXEuIpICA4")
        .header("Accept", "application/json")
        .end(function (result) {
            console.log(result.status, result.headers);
            // io.emit("crime_data", { message: "Success!", data: result.body })
            return res.json({ message: "Success!", data: result.body });
        });
    },

    filterCrimes: function(req, res) {
        let searchParams = {
            categoryid : "",
            end_date : "",
            lat : 41.881,
            lon : -87.623,
            keyword : "",
            start_date : ""
        }

        for (var key in req.body) {
            if (req.body[key]) {
                searchParams[key] = req.body[key];
            }
        }

        console.log(searchParams);

        unirest.get(`https://yourmapper2.p.mashape.com/markers?c=${searchParams.categoryid}&center=0&end=${searchParams.end_date}&f=json&id=182&lat=${searchParams.lat}&lon=${searchParams.lon}&num=500&search=${searchParams.keyword}&start=${searchParams.start_date}`)
        // Put api key here
        .header("X-Mashape-Key", "fNutKhjM8Smshcjz2VSdocmRagjMp1ro8g6jsnnRhXEuIpICA4")
        .header("Accept", "application/json")
        .end(function (result) {
            console.log(result.status, result.headers);
            return res.json({ message: "Success!", data: result.body });
        });
    }
}

//Jeremy KEY for yourmapper: fNutKhjM8Smshcjz2VSdocmRagjMp1ro8g6jsnnRhXEuIpICA4
//Mandy KEY for yourmapper: rSCiGbEc2amshYK4i3bGFu9ltLZWp1D9W11jsnoxBKLY0ixRyW
//Elliott's key
// 'QNVCYMTHZ0mshzFl0IBVoTRvjdLCp1kMFGVjsn51wd4liyvJWe'
