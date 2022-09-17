 //funcao geradora
function* cores(){
    yield 'Vermelho';
    yield 'Verde';
    yield 'Azul';
    yield 'Amarelo';
}

const c = cores()
console.log(c.next())//primeiro elemento
console.log(c.next())//segundo elemento

function* cont(n){
    let c=0
    while(c<n){
        yield console.log(c)
        c++
    }
}

const ct=cont(10)
//vai executar a funcao até chegar aqui, depois que encontra o yield
//ele retorna o valor e fica esperando para ser chamado novamente
console.log(ct.next())//vai retornar somente o primeiro valor