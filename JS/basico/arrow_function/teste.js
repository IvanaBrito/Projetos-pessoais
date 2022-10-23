 //funcao arrow
//formato () => {}
//normalmente utilizada em conjunto com map e pode ser utilizada assim:
//const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;
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