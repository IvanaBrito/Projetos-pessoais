//tornar algo assincrono em sincrono
//usada para representar um valor que pode estar disponível agora, no futuro ou nunca
//3 status: pending (status inicial), fullfiled, rejected

function contar(n){
    let cont=0
    for(let i=0;i<n;i++){
        cont++
    }
    return cont
}
//o sistema não espera o timeout aqui
function contarT(n){
    let cont=0
    let t = setTimeout(()=>{
        for(let i=0;i<n;i++){
            cont++
        }
    }, 2000)
    return cont
}
//promise:
function contarP(n){
    let cont=0
    //precisa passar 2 parametros: um para o resolved e outro para rejected
    let p = new Promise((resolve, rejected)=>{
        for(let i=0;i<n;i++){
            cont++
        }
        if(cont == n){
            resolve(cont)
        }
        else{
            rejected('Erro')
        }
    })

    return p
}
function somaPositivos(n1, n2){
    let p = new Promise((res, rej)=>{
        if(n1>=0 && n2>=0){
            res(n1+n2)
        }
        else{
            rej('Erro')
        }
    })
    return p
}
//o sistema espera o timeout, por causa do promise
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

console.log(contar(10))
contarP(10000)
    .then(sucesso => console.log('Sucesso: '+ sucesso))
    .catch(erro => console.log(erro))
// somaPositivos(10,2)
//     .then(sucesso => console.log('Soma: '+ sucesso))
//     .catch(erro => console.log(erro))
contarPT(10)
    .then(sucesso => console.log('Sucesso timeout: '+ sucesso))
    .catch(erro => console.log(erro))