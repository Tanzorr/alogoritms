import { isSubsequence } from "./is-subsequence";


describe('isSubsequence', () => {
    it('should return true if the first string is a subsequence of the second string', () => {
        expect(isSubsequence('hello', 'hello world')).toBe(true);
        expect(isSubsequence('sing', 'sting')).toBe(true);
        expect(isSubsequence('abc', 'abracadabra')).toBe(true);
        expect(isSubsequence('abc', 'acb')).toBe(false);
        expect(isSubsequence('abc', 'abracadabra')).toBe(true);
    });
});