export function averagePair(arr: number[], val: number): boolean {
    if (arr.length === 0) {
        return false;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const average = (arr[left] + arr[right]) / 2;

        if (average === val) {
            return true;
        } else if (average < val) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}