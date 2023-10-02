const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit",(e) => {
    e.preventDefault()
    
    const nome = from.inNome.value
    const masculino = from.inMasculino.cheked
    const altura = Number(form.inAltura.value)




    left peso
    if(masculino) {
        peso = 22 * Math.pow(altura,2)      
    } else{
        peso = 21 * Math.pow(altura, 2)
    }
    resp.innerText = '${nome} seu peso ideal é: ${peso.toFixed(3)} kg'
})

form.adddEventListener("reset" , (e) => {
    resp.innerText = " "
})