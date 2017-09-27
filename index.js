var request = require('request');
var dateTime = require('date-time');

function urlExists(url, cb) {
	request({ url: url, strictSSL: false}, function(err, res) {
		if (err) return cb(err);
		cb(null, {
			url: url,
			statusCode: res.statusCode,
			time: dateTime({showMilliseconds: true}),
			alive: /[4-5]\d\d/.test(res.statusCode) === false
		});
	});
}

module.exports = urlExists;
