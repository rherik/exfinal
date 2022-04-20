/*
- Tente fazer uma variável para receber a função adicionar(). A ideia é fazer a função ser recursiva, 
talvez colocar a lista e o contador fora da função.
- Fazer do item uma lista para mostrar apropriadamente na div/option. 
- A variavel soma deve receber uma função que soma os valores da lista.
*/
var n = document.getElementById('numero')
var res = document.getElementById('res')
var show = document.getElementById('show')
var lista = []
var soma = 0
function verificarEscopo(nu) {
    var num = Number(nu)
    if (num >= 1 && num <= 100) {
        return true
    } else {
        return false
    }
}
function verificarLista(n, l) {
    var num2 = Number(n)
    if (l.indexOf(num2) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar(){
    if (verificarEscopo(n.value) && !verificarLista(n.value, lista)) {
        lista.push(Number(n.value))
        var item = document.createElement('option')
        item.text = `O número ${n.value} foi adicionado à lista.`
        res.appendChild(item)
        show.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    n.value = ''
    n.focus()
}

function finalizarLista() {
    if (lista.length == 0) {
        alert('Você finalizou sem adicionar um valor à lista.')
    } else {
        let maior = lista[0]
        let menor = lista[0]
        for (let pos in lista) {
            soma += lista[pos]
            if (lista[pos] > maior)
                maior = lista[pos]
            if (lista[pos] < menor)
                menor = lista[pos]
        }
        show.innerHTML = ''
        show.innerHTML += '<p>A lista digitada foi:</p>'
        show.innerHTML += `<p> ${lista} </p>`
        show.innerHTML += `<p>Ao todo temos: ${lista.length} valores.</p>`
        show.innerHTML += `<p>Entre os valores incluidos na lista o maior é: ${maior}.</p>`
        show.innerHTML += `<p>Entre os valores incluidos na lista o menor é: ${menor}.</p>`
        show.innerHTML += `<p>Somando todos os valores temos: ${soma}.</p>`
        show.innerHTML += `<p>A média dos valores é ${soma/lista.length}.</p>`
    }
}
