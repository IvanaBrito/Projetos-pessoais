const greet = (name) => "Hello " + name + "!";

let numbers = [3, 5, 8, 9, 2];

const dobro = (numbers) => numbers * 2

const divideByTwo = number => number /2

const stringLength = (str) => console.log(`the length of "${str}" is:`, str.length)

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

//stringLength(longestCityNameInTheWorld)
//---------
const sum = (num1, num2) => num1 + num2

sum(40,2)
sum(42,0)
//----------
const stringLength2 = (str) => {
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

//stringLength2("willynilly")

//----
const soma = (...num) => {
    let r=0
    for(n of num){
        r+=n
    }
    return r 
}

var numeros = [18, 38, -38]

//console.log(soma(...numeros))
//-------
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => (`Nome: ${material} - tamanho: ${material.length}`)));