const skills: string[] = ['Coding', 'Testing', 'Debugging'];

interface Character {
    name: string;
    age: number;
    skills: string[];
}

const Daniel : Character = {
    name: 'Daniel',
    age: 30,
    skills: skills
}

console.table(Daniel);

export {}