import { sameFrequency } from "./same-frequency";

describe("sameFrequency", () => {
    it('should return true if the two numbers have the same frequency of digits', () => {
        expect(sameFrequency(182, 281)).toBe(true);
        expect(sameFrequency(34, 14)).toBe(false);
        expect(sameFrequency(3589578, 5879385)).toBe(true);
    });
});