const { expect } = require('chai');
const math = require('../math');

describe('Testing the isOdd method', () => {
  
  it('should return false when providing the number 2', () => {
    expect(math.isOdd(2)).to.be.false;
  })

  it('should return true when providing the number 3', () => {
    expect(math.isOdd(3)).to.be.true;
  })

})