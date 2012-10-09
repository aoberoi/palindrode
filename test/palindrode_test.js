var palindrode = require('../lib/palindrode.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

//exports['awesome'] = {
//  setUp: function(done) {
//    // setup here
//    done();
//  },
//  'no args': function(test) {
//    test.expect(1);
//    // tests here
//    test.equal(palindrode.awesome(), 'awesome', 'should be awesome.');
//    test.done();
//  }
//};

exports.test = {
	'correctly matches palindrome string' : function(test) {
		test.expect(1);
		test.ok(palindrode.test('Was it a car or a cat I saw?'));
		test.done();
	},
	'correctly matches non-palindrome strings' : function(test) {
		test.expect(1);
		test.equal(palindrode.test('This is not a palindrome'), false);
		test.done();
	},
	'returns false when passed blank strings' : function(test) {
		test.expect(1);
		test.equal(palindrode.test(''), false);
		test.done();
	},
	'returns false when passed only spaces/punctuation' : function(test) {
		test.expect(1);
		test.equal(palindrode.test(' ?., '), false);
		test.done();
	},
	'returns false when passed non-string values' : function(test) {
		test.expect(2);
		test.equal(palindrode.test(1234), false);
		test.equal(palindrode.test(), false);
		test.done();
	}
};
