import countDuplicates from './count-duplicates';
import should from 'should';

describe('countDuplicates()', function() {
  it('should return total number of duplicate characters in an alphanumeric string', function() {
    const count = countDuplicates('aabb44');
    should.equal(count, 3);
  });
  
  it('should throw an error if string is not alphanumeric', function(){
    try {
      countDuplicates('aabb44$%');
    }
    catch(actual) {
			let expected = new Error('String must be aplhanumeric');    
      should.deepEqual(actual, expected);
    }
  });
  
	it('should return 0 if string is not provided', function() {
    const count = countDuplicates();
    should.equal(count, 0);
  });
  
  it('should return 0 if string is empty', function() {
    const count = countDuplicates();
    should.equal(count, 0);
  });
});
