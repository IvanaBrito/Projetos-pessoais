//resumo do array original de acordo com uma função
let num = [0,1,2,3,4,5]
//a primeira vez que rodar vai ter n1 = 0 e n2 =1
//na segunda vez, vai ter o resultado da primeira e n2 = 2
let soma = num.reduce((n1,n2)=>{
    return n1+n2
})
console.log(soma)

//outro exemplo:

let pessoas =[
    {nome: 'Bruno', idade:40},
    {nome: 'Scarlindo', idade:30},
    {nome: 'Girda', idade:25},
    {nome: 'Gleb', idade:18}
]
let nomes=pessoas.reduce((p1, p2)=>{
    p1.push(p2.nome)
    return p1
}, [])
let idades=pessoas.reduce((p1, p2)=>{
    p1.push(p2.idade)
    return p1
}, [])

console.log(nomes)
console.log(idades)