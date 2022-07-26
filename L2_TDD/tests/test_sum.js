const assert = require('assert');
const math = require('../math');

describe('Testing the sum method from Math.js', () => {

  it('should add [1,2,3] and return a 6', () => {
    assert.equal(math.sum([1,2,3]), 6);
  });

  it('should add [0,0,1] and return a 1', () => {
    assert.equal(math.sum([0,0,1]), 1);
  })
})

