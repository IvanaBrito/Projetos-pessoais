var num;

try{
    num=prompt("Digite um valor");
    if(num > 10){
        throw new Error("Valor inválido") //gera o erro manualmente e sua mensagem
    }
    document.write('Valor:' +num)
}catch(e){
    document.write(e.message) //o "e" é o erro e a mensagem dele é a que está no throw
}finally{
    document.write("<br>Fim do tratamento") //finally é o que aparece mesmo com erro ou não
}