const frm = document.querySelector("form")
const resp = document.querySelector("h4")

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const pessoas = Number(frm.inNumber.value)
    const peixe = Number(frm.inPeixe.value)
    let resultado
    if(peixe > pessoas) {
        resultado = (pessoas *20) + (( peixe - pessoas) * 12)
    } else
})