
//Declaracion de parametros iniciales
function newFunction (name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX'
    console.log(name, age, country)
}

//es6
function newFunction2 (name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country)
}

newFunction()
newFunction2()

//Concatenacion de arrays
let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']

//es6
let education = ['David', ...team1, ...team2]

console.log(education)

//Globalidad de variable
{
    var globalVar = "Global Var"
}

{
    let globalLet = "Global Let"
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';

//Arrow function
const names = [
    {name: 'Oscar', age: 32},
    {name: 'Yesica', age: 27}
];

const listOfNames = names.map(item => console.log(item.name));

const square = num => num * num;

//Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true)
            resolve('Hey');
        else 
            reject('Ups')
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))

//Clases
class calculator {
    constructor() 
    {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB
    }
}

const calc = new calculator();
console.log(calc);

//Generador
function* helloWorld() {
    if(true)
        yield 'Hello ';
    if (true)
        yield 'World'
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

