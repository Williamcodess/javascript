function contar() {
    var ini = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var res = document.getElementById('res')
    var pass = document.querySelector('#ipasso')


    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        window.alert('[ERRO] Verifique os números informados')
        res.innerHTML = `Impossível contar.`
    } else {
        res.innerHTML = `Contando: <br>`
        let ii = Number(ini.value)
        let ff = Number(fim.value)
        let pp = Number(pass.value)

        if (pp <= 0){
            alert('"Passo" inválido, considerando passo "1"')
            pp = 1
        }

        if (ii < ff) {
        for(let cal = ii; cal <= ff; cal += pp) {
            res.innerHTML += `${cal}  \u{1F449}`
            }
        } else {
            for(let cal = ii; cal >= ff; cal -= pp) {
                res.innerHTML += `${cal} \u{1F449}`
            }
        }
            res.innerHTML += `\u{1F3C1}`
    }
}