var assert = require('assert');

var urlExists = require('..');

urlExists('https://www.baidu.com', function(err, exists) {
  assert(exists.alive === true);

  urlExists('https://baidu.com', function(err, exists) {
    assert(exists.alive === true);

    urlExists('http://www.baidu.com', function(err, exists) {
      assert(exists.alive === true);

      urlExists('https://www.asdflkasdfljalsfdjasfdljklsjafasdfljjkasfdsafdljfdsaljakljsdljksafasfdlk.lasjkd', function(err, exists) {
        assert(exists.alive === false);

        console.log('All tests pass!');
        process.exit(0);
      });
    });
  });
});
