//pode criar novos ou sobrescrever metodos da classe
class CarroNovo{

    constructor(tpComb){
        this.qtdeComb=100
        this.tipoComb = tpComb
        this.ligado = false
    }
    info(){//metodo
        console.log(`\nQtde Combustivel: ${this.qtdeComb} \nTipo: ${this.tipoComb}\nLigado: ${this.ligado ? "Sim" : "Não" }`)
    }
    set setLigar(t){
        this.ligado=t
    }
    get setLigar(){
        return this.ligado
    }
    set setComb(v){//como se fosse um atributo, usado para alterar um valor de um atributo
        if(v <0 || v>100){
            console.log("Valor invalido")
        }
        else{
            this.qtdeComb = v
        }
    }
    get getComb(){
        return this.qtdeComb
    }
    
}

class CarroCombate extends CarroNovo{
    //super = acessando algo da classe pai
    constructor(potTiro){
        super(1)
        this.municao = 1000
        this.potencia = potTiro
    }
    info(){//metodo
        super.info()
        console.log(`Qtde municao: ${this.municao} \nPotencia: ${this.potencia}`)
        console.log("\n------\n")
    }
}
class CarroTransporte extends CarroNovo{
    //super = acessando algo da classe pai
    constructor(passageiros){
        super(2)
        this.passageiros = passageiros
    }
    info(){//metodo
        super.info()
        console.log(`Passageiros: ${this.passageiros}`)
        console.log("\n------\n")
    }
}

CarroNovo.prototype.portencia=0
CarroNovo.prototype.velocidade=0
CarroNovo.prototype.velMax=0

//metodo para imprimir as infos:
CarroNovo.prototype.info2=function(){
    this.info()
    console.log(`Velocidade: ${this.velocidade} \nPotencia: ${this.portencia} \nVelocidade Maxima: ${this.velMax}`)
    console.log("\n------\n")
}
//pode sobrescerver o metodo anterior. Ex:
CarroNovo.prototype.info=function(){
    console.log(`Velocidade: ${this.velocidade} \nPotencia: ${this.portencia} \nVelocidade Maxima: ${this.velMax}`)
    console.log("\n------\n")
}

let cr1 = new CarroCombate("alto")

cr1.setLigar=true
//cr1.info()
cr1.info()