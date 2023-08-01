import {productOfArray} from "./product-of-array";


describe("productOfArray", () => {
    it('should return product of them all', function () {
        expect(productOfArray([1, 2, 3])).toBe(6);
        expect(productOfArray([1, 2, 3, 10])).toBe(60);
        expect(productOfArray([1, 2, 3, 10, 20])).toBe(1200);
    });
});