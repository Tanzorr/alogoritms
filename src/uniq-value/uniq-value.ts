
export function uniqValue(arr: number[]): number {
    const uniqArray = new Set(arr);

    return uniqArray.size;
}