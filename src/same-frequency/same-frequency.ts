export function sameFrequency(n1: number, n2: number): boolean{
    const n1Str = n1.toString();
    const n2Str = n2.toString();

    if(n1Str.length !== n2Str.length){
        return false;
    }

    const n1number = +n1Str.split('').sort().join('');
    const n2number = +n2Str.split('').sort().join('');

    if(n1number !== n2number){
        return false;
    }

    return true;
}