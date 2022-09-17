let num = [5,1,4,2,3]
let it = num[Symbol.iterator]()
//console.log(it.next().value)//resultado = 5
//console.log(it.next().value)//resultado = 1

for(let i=0; i<num.length;i++){
    let v=it.next().value//não precisa utilizar um num[i] para percorrer o array
    v%2 > 0 ? console.log("Impar") : console.log("Par")
}

