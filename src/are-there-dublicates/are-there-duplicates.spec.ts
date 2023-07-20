import { areThereDuplicates } from "./are-there-duplicates";


describe("areThereDuplicates", () => {
    it('should return true if in arguaments has duplicatos', function () {
        expect(areThereDuplicates([1, 2, 3])).toBe(false);
        expect(areThereDuplicates([1, 2, 2])).toBe(true);
        expect(areThereDuplicates(['a', 'b', 'c', 'a'])).toBe(true);
    });
});