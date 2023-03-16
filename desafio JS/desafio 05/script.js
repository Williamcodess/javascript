function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Digite um número')
    } else {
        let numerador = Number(num.value)
        let denominador = 1

        while (denominador <= 10) {
            let item = document.createElement('option')
            item.text = `${numerador} x ${denominador} = ${numerador*denominador}`
            item.value = `tab${denominador}`
            tab.appendChild(item)
            denominador++
        }
    }
}