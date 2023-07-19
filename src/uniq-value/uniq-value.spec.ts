import {uniqValue} from "./uniq-value";

describe('uniqValue', () => {
    it('should return the number of unique values in the array', () => {
        expect(uniqValue([1, 1, 1, 1, 1, 2])).toBe(2);
        expect(uniqValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
        expect(uniqValue([])).toBe(0);
        expect(uniqValue([-2, -1, -1, 0, 1])).not.toBe(2);
    });
});