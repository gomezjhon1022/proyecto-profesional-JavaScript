console.log('Hello, TypeScript');

function add(a: number, b: number) {
    return a + b;
}

const sum = add(2,3);
console.log(sum);

// Boolean
let muted: boolean = true;
muted = false;

// Numbers
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

//string
let nombre: string = 'Camila';
let saludo = `Me llamo ${nombre}`;
console.log(saludo);

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Laura'];
//people.push[9000];

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Laura');
peopleAndNumbers.push(9001);
console.log(peopleAndNumbers);

// enum
enum Color {
    Rojo = "Rojito",
    Verde = "Verdecito",
    Azul = "Azulito",
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);
// Any
let comodin: any = "Joker";
comodin = { type: 'Wildcard'};

// Object
let someObject: object = { type: 'Wildcard'};