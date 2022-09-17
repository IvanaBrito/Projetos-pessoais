let produtos = new Map([
    ["01","Mouse"],
    ["02","Teclado"],
    ["03","Monitor"]
])

//Metodo clear - limpa tudo o que estiver no map
//produtos.clear()

//Metodo delete - deleta a chave indicada
produtos.delete("02")

console.log("tamanho: "+produtos.size)

for(p of produtos){
    console.log(p[1])
}

//metodo forEach
function info(valor, chave){
    console.log("Chave: "+ chave + " - Valor: "+valor)
}

produtos.forEach(info)

//metodo keys
let itk=produtos.keys()
let itv=produtos.values()

console.log(itk.next().value)
console.log(itv.next().value)

//metodo has - return true or false
console.log(produtos.has("02") ? "Produto encontrado" : "Não encontrado")