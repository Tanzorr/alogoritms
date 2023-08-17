
export function pivot(arr: number[], start: number = 0, end: number = arr.length - 1): number {
    function swap(arr: number[], i: number, j: number): void {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if(pivot > arr[i]){
            swapIndex ++;
            swap(arr, swapIndex, i);
            console.log(arr);
        }
    }

    swap(arr, start, swapIndex);

    return swapIndex;
}

export function quickSort(arr: number[]):number[]{

    return arr;
}