export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Rafa",
    children: ["Pablo", "Pedro"]
}

const passenger2: Passenger = {
    name: "Pipe"
}

const printChildren = (passenger: Passenger) : number => {
    const childrens = passenger.children?.length ?? 0;
    console.log(childrens);
    return childrens;
}

printChildren(passenger1);