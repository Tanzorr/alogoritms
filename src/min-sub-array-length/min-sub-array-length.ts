export function minSubArrayLength(arr: number[], num: number): number {

    function findSubArrayLength(arr: number[], length: number = 1, num: number): number {
        let sum = 0;

        for (let i = 0; i < length; i++) {
            sum += arr[i];
        }

        if (sum >= num) {
            return length;
        }

        for (let i = length; i < arr.length; i++) {
            sum = sum - arr[i - length] + arr[i];

            if (sum >= num) {
                return length;
            }
        }

        return findSubArrayLength(arr, length + 1, num);
    }

    return findSubArrayLength(arr, 1, num);
}