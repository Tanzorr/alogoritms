export function reverseString(string: string): string{
    if(string.length === 0){
        return "";
    }

    return string[string.length - 1] + reverseString(string.slice(0, string.length - 1));
}