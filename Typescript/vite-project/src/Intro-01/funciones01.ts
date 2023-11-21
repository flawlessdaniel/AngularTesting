function addNumbers(a: number, b: number) : number
{
    return a + b;
}

const addNumbersRow = (a: number, b: number) : string => `${a + b}`;

function Multiply(first: number, second?: number, base: number = 2) : number
{
    return (first * base);
}

const result = addNumbers(1, 2);
const result2 = addNumbersRow(1, 2);
const result3 = Multiply(5);

console.log({result, result2, result3});

export {};