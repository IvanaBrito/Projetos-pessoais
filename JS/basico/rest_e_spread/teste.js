const notas = [[100, 2], 80, 40]

console.log(...notas[0]) //spread

function soma(...num){ //aqui o ...num não é um spread, é um parametro rest
    let res = 0
    let qtde = num.length

    for(let i =0; i<qtde; i++){
        res +=num[i]
    }
    return res
}

console.log(soma(1,2,3,6,8))