//parecido com MAP
//map é chave-valor e não pode chave repetida
//set é só valor e não pode ter valor repetido

let meuSet = new Set([1,2,3])

//adicionar valores:
meuSet.add(4)
meuSet.add(5)
meuSet.add(2)//não vai adicionar esse, pq já tem
for(n of meuSet){
    console.log(n)
}
console.log('-------')
console.log(`Quantidade de números: ${meuSet.size}`)
console.log(meuSet.has(2) ? "Produto encontrado" : "Não encontrado")