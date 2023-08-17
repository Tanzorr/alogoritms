import {quickSort} from "./quick-sort";

describe('Quick Sort', () => {
   it('should return pivot index', () => {
      expect(quickSort([4, 8, 2, 1, 5, 7, 6, 3])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
      expect(quickSort([4, 6, 9, 1, 2, 5, 3])).toEqual([1, 2, 3, 4, 5, 6, 9]);
   });

   it('should return sorted array', () => {
      expect(quickSort([37, 45, 29, 8])).toEqual([8, 29, 37, 45]);
      expect(quickSort([8, 1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
      expect(quickSort([8, 1, 2, 3, 4, 5, 6, 7, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
   });
});