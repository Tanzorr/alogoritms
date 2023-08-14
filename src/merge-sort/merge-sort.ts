export function mergeSortedArray(arr1: number[], arr2: number[]): number[] {
    const resultArray: number[] = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j <  arr2.length) {
        if (arr1[i] < arr2[j]) {
                resultArray.push(arr1[i]);
            i++;
        } else {
            resultArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        resultArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        resultArray.push(arr2[j]);
        j++;
    }

    return resultArray;
}

export function mergeSort(arr: number[]): number[] {
    if(arr.length ===1){
        return  arr;
    }

    let midlArray = Math.floor(arr.length/2);
    let leftArray =  mergeSort(arr.slice(0, midlArray));
    let rightArray= mergeSort(arr.slice(midlArray));

    return  mergeSortedArray(leftArray, rightArray);
}

