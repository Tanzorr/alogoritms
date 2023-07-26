import { minSubArrayLength } from "./min-sub-array-length";

describe('minSubArrayLength', () => {
    it('should return min sub array length or 0', function () {
        expect(minSubArrayLength([2, 3, 1, 2, 4, 3], 7)).toBe(2);
        expect(minSubArrayLength([2, 1, 6, 5, 4], 9)).toBe(2);
        expect(minSubArrayLength([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1);
        expect(minSubArrayLength([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3);
    });
});