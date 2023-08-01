export function pow(num: number, power: number): number {
    if (power === 0) {
        return 1;
    }

    return num * pow(num, power - 1);
}