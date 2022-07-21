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

// Funciones
function add1 (a: number, b: number): number {
    return a + b;
}

const sum1 = add1(4, 6);

function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}

const ana = fullName('Ana', 'Rios');

// Interfaces
enum Color1 {
    Blanco = "Blanco",
    Lila= "Lila"
}
interface Rectangulo {
    ancho: number
    alto: number;
    color1?: Color1;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color1: Color1.Blanco,
};

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
    return `Un rectangulo ${this.color1}`;
};
console.log(rect.toString());
