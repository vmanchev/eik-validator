'use strict';
var expect = require('chai').expect;
var napValidator = require('../dist/index.js');

describe('isValidEIK', () => {
  it('should return true when a valid 9-digit EIK is provided', () => {
    expect(napValidator.isValidEIK('121467855')).to.equal(true);
    expect(napValidator.isValidEIK('202919919')).to.equal(true);
  });

  it('should return true when a valid 13-digit EIK is provided', () => {
    expect(napValidator.isValidEIK('1314720070041')).to.equal(true);
  });

  it('should return false when an invalid 9-digit EIK is provided', () => {
    expect(napValidator.isValidEIK('121467854')).to.equal(false);
    expect(napValidator.isValidEIK('202919918')).to.equal(false);
  });

  it('should return true when an invalid 13-digit EIK is provided', () => {
    expect(napValidator.isValidEIK('1314720071041')).to.equal(false);
  });

  it('should return false when provided value length is not 9 or 13 characters', () => {
    expect(napValidator.isValidEIK('12146785')).to.equal(false);
    expect(napValidator.isValidEIK('1214678550')).to.equal(false);
    expect(napValidator.isValidEIK('13147200700410')).to.equal(false);
  });

});

describe('isValidVAT', () => {
  it('should returun true when a valid VAT is provided', () => {
    expect(napValidator.isValidVAT('BG202919919')).to.equal(true);
  });

  it('should returun false when an invalid VAT is provided', () => {
    expect(napValidator.isValidVAT('202919919')).to.equal(false);
    expect(napValidator.isValidVAT('BG20291991')).to.equal(false);
    expect(napValidator.isValidVAT('BG202919918')).to.equal(false);
  });
});