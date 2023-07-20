export function areThereDuplicates(arr: any []): boolean {
    const uniqArray = new Set(arr);

    return uniqArray.size !== arr.length;
}