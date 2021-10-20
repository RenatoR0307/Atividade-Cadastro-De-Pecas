console.log("Digite o peso da peca")
let peso = 120;

console.log(peso)

if (peso > 100) {
    console.log("A peca possui o peso adequado, pode ser cadastrada!")

    let listaPecas = ["freio", "motor de arranque", "bobina", "Disco de freio", "fio"]
    if (listaPecas.length < 6) {
        console.log("A lista possui espaco, digite o nome da peca.")

        let peca = "vela"
        console.log(peca)

        if (peca.length > 3) {

            listaPecas.push(peca)

            console.log("Nome da peca e valido pode seguir com cadastro!")

            for (let i = 0; i < listaPecas.length; i++) {
                const listaAtual = listaPecas[i];
                console.log("Peca: " + listaAtual)
            }

        }
        else {
            console.log("Nome da peca menor que o permitido ")
        }

    }
    else {
        console.log("Espaco maximo atingido")
    }

}
else {
    console.log("A peca nao pode ser cadastrada, nao possui o peso minimo!")
}
