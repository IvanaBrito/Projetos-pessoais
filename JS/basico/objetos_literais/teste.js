 //objetos literais
const Carro ={
    marca: "Vw",
    modelo: "Golf",
    info: function(){//metodo
        console.log(`Marca: ${this.marca} \nModelo: ${this.modelo}`)
    }
}

console.log(`Marca: ${Carro.marca}`)

Carro.marca="Honda"//troca os valores e depois chama a funcao info


const c2=Object.create(Carro)

c2["marca"]="Toyota"
Carro.info()

c2.info()

const Veiculo ={
    marca: "Vw",
    modelo: "Golf",
    info: function(){//metodo
        console.log(`Marca: ${this.marca} \nModelo: ${this.modelo}`)
    }
}
const Caracteristicas ={
    cor: "Cinza",
    cambio: "automatico"
}

delete Caracteristicas.cor

const Car=Object.assign(Veiculo, Caracteristicas)

//desestruturação
let {modelo, cambio} = Car

console.log(Car)

Car.info()

console.log(`${modelo} e ${cambio}`)