import {pow} from "./pow";

describe("pow", () => {
    it('should return pow of number', function () {
        expect(pow(2, 0)).toBe(1);
        expect(pow(2, 2)).toBe(4);
        expect(pow(2, 4)).toBe(16);
        expect(pow(3, 3)).toBe(27);
    });
});