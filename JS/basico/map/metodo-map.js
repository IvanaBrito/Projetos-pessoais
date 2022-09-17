let num = [1,4,9,16,25]
let raiz = num.map(Math.sqrt)
for(r of raiz){
    console.log(r)
}
console.log("-----")
let dobros = num.map((n)=>{
    return n*2
})
for(r of dobros){
    console.log(r)
}
