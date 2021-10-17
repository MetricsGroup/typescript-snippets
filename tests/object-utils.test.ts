import { ObjectUtils } from '../src/object-utils';

describe('ObjectUtils', () => {
  describe('test arrayObjectsToObject function', () => {
    let testObjArray: any[];
    const keyId = 'id';

    beforeEach(() => {
      testObjArray = [
        { id: 1, name: 'Apples' },
        { id: 2, name: 'Lettuce' },
        { id: 3, name: 'Pasta' }
      ];
    });

    it('should return an array of objects as an object', () => {
      const expectedResult = {
        '1': { id: 1, name: 'Apples' },
        '2': { id: 2, name: 'Lettuce' },
        '3': { id: 3, name: 'Pasta' }
      };
      expect(ObjectUtils.arrayObjectsToObject(testObjArray, keyId)).toEqual(expectedResult);
    });
  });
});
