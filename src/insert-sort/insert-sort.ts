export function insertSort(arr: number[]): number[]{
    const swap = (arr: number[], i: number, j: number): void => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    for(let i=1; i < arr.length; i++){
        let lowestIndex = i;

        for(let j=i-1; j >= 0; j--){
            if(arr[j] > arr[lowestIndex]){
                swap(arr, j, lowestIndex);
                lowestIndex = j;
            }
        }
    }

    return arr;
}