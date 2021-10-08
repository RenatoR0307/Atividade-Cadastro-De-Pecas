let peso = 120; 

    console.log(peso)

if(peso  > 100) {
    console.log("A peca possui o peso adequado, pode ser cadastrada!")
} else {
    console.log("A peca nao pode ser cadastrada, nao possui o peso minimo!")
}

let listaPecas = ["freio","motor de arranque","bobina","Disco de freio","fio"]
    console.log (listaPecas)
if (listaPecas.length < 5 ) {
    
    console.log("A lista possui espaco")
} else {
    console.log("Espaco maximo atingido")

}
    listaPecas.push("Carter")

    console.log(listaPecas)

let nomePeca = "Fio"
if (nomePeca.length > 3) 
{
    console.log("Nome da peca e valido pode seguir com cadastro!")
    
} else 
{
    console.log("Nome da peca menor que o permitido ")  
}
    

for (let i = 0; i < listaPecas.length; i++) {
    const listaAtual = listaPecas[i];
    console.log("Pecas: " + listaAtual)
}
 