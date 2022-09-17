/*metodo constructor - chamado quando instaciar um objeto 
dessa classe e executa o que estiver programado para fazer
*/
class Carro{
    //cor = "verde" //atributo
    
    //modificador static - atributo ou metodo podem ser static
    static alerta = true

    constructor(cor, modelo, marca){
        this.cor=cor //atributo
        this.modelo = modelo
        this.marca = marca
        this.ligado = false
    }
    info(){//metodo
        console.log(`\nCor: ${this.cor} \nModelo: ${this.modelo} \nMarca: ${this.marca}\nLigado: ${this.ligado ? "Sim" : "Não" }`)
        console.log("\nAlerta: "+(Carro.alerta ? "Sim" : "Não"))
        console.log("\n------\n")
    }
    ligar(){
        this.ligado=true
    }
    desligar(){
        this.ligado=false
    }
    set setModelo(v){//como se fosse um atributo, usado para alterar um valor de um atributo
        this.modelo=v
        console.log("Modelo alterado")
        //dá para fazer verificaçoes por aqui
    }
    get getModelo(){
        return this.modelo
    }
    set setAlerta(t){
        Carro.alerta = t
        console.log("Atenção! Alerta desligado de todos os carros")
    }
}

let c1 = new Carro("Preto","Up", "VW")
let c2 = new Carro("Vermelho","Onix", "Chevrolet")
c1.info()//chama o metodo info

c1.cor="Cinza"//mudando o valor do atributo
c1.ligar()
c1.setModelo = 'Toyota'
console.log(c1.getModelo)//chama o metodo como se fosse um atributo, ou seja, sem os ()
c1.setAlerta = false // ou Carro.setAlerta = false
c1.info()
c2.info()

//Herança

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

let cr1 = new CarroCombate("alto")

cr1.setLigar=true
cr1.info()

let cr2 = new CarroTransporte(5)
cr2.info()