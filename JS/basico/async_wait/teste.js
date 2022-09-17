//facilitar o retorno da promise

function contarPT(n){
    let cont=0
    let p = new Promise((resolve, rejected)=>{
        let t = setTimeout(()=>{
            for(let i=0;i<n;i++){
                cont++
            }
            if(cont == n){
                resolve(cont)
            }
            else{
                rejected('Erro')
            }
        }, 2000)
    
    })
    return p
}
async function contarPTA(n){
    const r = await contarPT(n)
    console.log(`Resultado: ${r}`)
}
contarPTA(10)//não precisa mais passar o then e catch