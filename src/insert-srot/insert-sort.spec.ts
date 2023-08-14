import { insertSort } from './insert-sort';

describe('Insert Sort', () => {
    it('should return sorted array', () => {
      expect(insertSort([37, 45, 29, 8])).toEqual([8, 29, 37, 45]);
      expect(insertSort([8, 1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    })
});
