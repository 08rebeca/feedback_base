function pegarNota() {
    let nota = localStorage.getItem("nota")

    let paragrafoNota = document.querySelectorAll(".paragrafo_nota")

    paragrafoNota.innerHTML = `Você selecionou ${nota} de 5`
}

pegarNota()