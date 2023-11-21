interface Character {
    name: string;
    age: number;
    hp: number;
    ShowHp: () => void;
}

function healCharacter(character: Character, amount: number) : void {
    character.hp += amount;
}

const Daniel: Character = {
    name: 'Daniel',
    age: 30,
    hp: 100,
    ShowHp() {
        console.log(`Puntos de HP> ${this.hp}`);
    }
}

healCharacter(Daniel, 20);

Daniel.ShowHp();

export {};