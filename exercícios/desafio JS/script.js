function contar() {
    var ini = document.getElementById('iinicio')
    var ifim = document.getElementById('ifim')
    var pas = document.getElementById('ipasso')

    var res = document.getElementById('res')

    if (ini.value.length == 0 || ifim.value.length == 0 || pas.value.length == 0) {
        window.alert('Verifique os valores informados')
    } else {
        res.innerHTML = `Contando:`
        let i = Number(ini.value)
        let f = Number(ifim.value)
        let p = Number(pas.value)

        for (let c = i; c <= f; c += p)
            res.innerHTML += `${c}`
    }
}