import {bubbleSort} from "./bubble-sort";


describe('Bubble Sort', () => {
    it('should return sorted array', () => {
        expect(bubbleSort([37, 45, 29, 8])).toEqual([8, 29, 37, 45]);
        expect(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
});