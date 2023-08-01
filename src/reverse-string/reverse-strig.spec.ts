import { reverseString } from "./reverse-string";

describe("reverseString", () => {
    it('should return revese string', function () {
        expect(reverseString("")).toBe("");
        expect(reverseString("a")).toBe("a");
        expect(reverseString("ab")).toBe("ba");
        expect(reverseString("abc")).toBe("cba");
        expect(reverseString("abcd")).toBe("dcba");
    });
});