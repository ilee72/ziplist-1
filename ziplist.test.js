/* eslint-env mocha, chai */
/* global zipList, zipListTheSimpleWay, chai */

describe('ZipList', function () {
  const listOne = ['a', 'b', 'c'];
  const listTwo = [1, 2, 3];
  describe('zipList()', function () {
    it('should return [\'a\', 1, \'b\', 2, \'c\', 3]', function () {
      chai.expect(zipList(listOne, listTwo)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
    });
  });
  describe('zipListTheSimpleWay()', function () {
    it('should return [\'a\', 1, \'b\', 2, \'c\', 3]', function () {
      chai.expect(zipListTheSimpleWay(listOne, listTwo)).to.deep.equal(['a', 1, 'b', 2, 'c', 3]);
    });
  });
});
