import { mergeSort, mergeSortedArray } from "./merge-sort";


describe('merge sort', () => {
    it('should return sorted from 2 sorted array', () => {
        expect(mergeSortedArray([1, 3, 5], [2, 4, 6])).toStrictEqual([1, 2, 3, 4, 5, 6]);
        expect(mergeSortedArray([3,4,22], [1,6])).toStrictEqual([1,3,4,6,22]);
    });

    it('should return sorted array from unsorted array', () => {
        expect(mergeSort([22,3,4,6,1])).toStrictEqual([1,3,4,6,22]);
    })
})