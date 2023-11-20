const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener(" submit", (e) => {
    e.preventDefault()
    const saque = Number(frm.inSaque.value)
     
    if ( saque % 10 !=0) {
        alert("Valor invalido para notas dispniveis (R$ 10, 50 ,100)")
        frm.inSaque.focus()
        return
    }

    const notasCem = Math.floor(saque/100)
    let resto =saque %100
    const notasCinquenta = Math. floor(resto/50)
    resto = resto % 50
    const notasDez = Math.floor(resto/10)
    if (notascem > 0) {
        resp1.innertText = 'Notas de R$ 100 : $ {notasCem}'
    }
if (notasCinquenta > 0) {
    resp2.innerText ='Notas de R$: ${notasCinquenta}'
}
if(notasDez > 0) {
    resp3.innerTex ='Notas de R$ 10: ${notadez}'
    }
})