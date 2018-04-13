const expect = require('chai').expect;
const fizzbuzz = require('../fizzBuzzer');

describe('fizzbuzz', function() {
	it('should return "fizz-buzz" if the number is divisible by 15, "buzz" if the number is divisible by 5, "fizz" if the number is divisible by 3, or the number', function () {
		const normalCases = [
			{num: 15, expected: 'fizz-buzz'},
			{num: 5, expected: 'buzz'},
			{num: 3, expected: 'fizz'},
			{num: 2, expected: 2}
		];
		normalCases.forEach(function(num) {
			const result = fizzbuzz(num.num);
			expect(result).to.equal(num.expected);
		});
	});

	it('should raise errors if args are not numbers', function() {
		const badInputs = ['1', false, null, undefined];
		badInputs.forEach(function(input) {
			expect(function() {
				fizzbuzz(input);
			}).to.throw(Error);
		});
	});
});

