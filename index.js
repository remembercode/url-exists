var request = require('request');

function urlExists(url, cb) {
  request({ url: url, method: 'HEAD' }, function(err, res) {
    if (err) return cb(err);
    cb(null, {
		url: url,
		statusCode: res.statusCode,
		alive: /[4-5]\d\d/.test(res.statusCode) === false
	});
  });
}

module.exports = urlExists;
