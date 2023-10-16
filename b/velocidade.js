const from = document.querySelector("from")
const resp = document.querySelector("h3")



 from.addEventListener("submit",(e) =>{
    e.preventDefault()
    const permitida = Number(from.inPermitida.value)
    const condutor = Number(form.inCondutor.value)
    let leve = permitida +(permitida =0.2)

    if(condutor <= permitida){
        resp,innerText = 'Situaçao: Sem Multa '

         }else if(condutor <= leve) {
            resp.innerText = 'Situaçao: Multa Leve '
         } else{
            resp.innerText ='Situaçao: Multa grave'
         }
 })