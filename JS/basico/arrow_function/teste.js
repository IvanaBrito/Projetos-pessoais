 //funcao arrow
const soma = (...num) => {
    let r=0
    for(n of num){
        r+=n
    }
    return r 
}

const par = num =>{
    return num%2==0? "par" : "impar"
}

console.log(soma(18, 38, -38))

console.log(par(2))