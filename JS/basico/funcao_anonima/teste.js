let soma =function (...num){ //funcao anonima
    let res = 0

    for(n of num){
        res +=n
    }
    
    return res
}

console.log(soma(1,2,3,6,8))