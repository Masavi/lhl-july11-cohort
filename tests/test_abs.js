const { expect } = require('chai');
const math = require('../math');

describe('Testing the abs method', () => {
  
  it('should be a function', () => {
    expect(math.abs).to.be.a('function')
  })

  it('should return 5 when providing -5', () => {
    expect(math.abs(-5)).to.equal(5)
  })

  it('should return 35 when providing 35', () => {
    expect(math.abs(35)).to.equal(35)
  })

  it('should return null when providing nothing', () => {
    expect(math.abs()).to.be.null;
  })

})