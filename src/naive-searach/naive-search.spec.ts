import { naiveSearch } from './naive-search';

describe('naiveSearch', () => {
    it('should return index of short string in long string', function () {
        expect(naiveSearch('lorie loled', 'lol')).toBe(1);
        expect(naiveSearch('lorie loled', 'lo')).toBe(2);
        expect(naiveSearch('lorie loled', 'pop')).toBe(0);
        expect(naiveSearch('lorie loled', 'l')).toBe(3);
    })
})
