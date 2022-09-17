let produtos = new Map()

//          chave - valor
produtos.set("01","Mouse")
.set("02","Teclado")
.set("03","Monitor") //set encadeado

/* ou pode ser assim:
let produtos = new Map([
    ["01","Mouse"],
    ["02","Teclado"],
    ["03","Monitor"]
])
*/

produtos.size //tamanho

console.log(produtos.get("03"))

for(p of produtos){
    console.log(p)
}