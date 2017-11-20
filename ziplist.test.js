/* eslint-env mocha, chai */
/* global sumFor, sumWhile, sumRecursion, sumTheSimpleWay, chai */

describe('ZipList', function () {
  describe('zipList()', function () {
    it('should return a single array with 8 elements', function () {
      chai.expect(zipList([1, 2, 3, 4], ['a', 'b', 'c', 'd']).length).to.equal(8);
    });
    it('should return [1,\'a\',2,\'b\',3,\'c\',4,\'d\']', function () {
      chai.expect(zipList([1, 2, 3, 4], ['a', 'b', 'c', 'd'])).to.deep.equal([1,'a',2,'b',3,'c',4,'d']);
    });
  });
  describe('zipListTheSimpleWay()', function () {
    it('should return a single array with 8 elements', function () {
      chai.expect(zipListTheSimpleWay([1, 2, 3, 4], ['a', 'b', 'c', 'd']).length).to.equal(8);
    });
    it('should return [1,\'a\',2,\'b\',3,\'c\',4,\'d\']', function () {
      chai.expect(zipListTheSimpleWay([1, 2, 3, 4], ['a', 'b', 'c', 'd'])).to.deep.equal([1,'a',2,'b',3,'c',4,'d']);
    });
  });
});
