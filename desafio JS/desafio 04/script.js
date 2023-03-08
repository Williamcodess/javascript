function contar() {
    var ini = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var res = document.getElementById('res')
    var pass = document.querySelector('#ipasso')


    if (ini.value.length == 0 || ini.value.length < 0 || fim.value.length == 0 || fim.value.length < 0 || pass.value.length == 0 || pass.value.length < 0) {
        window.alert('[ERRO] Verifique os números informados')
    } else {
        res.innerHTML = `Contando: `
        let ii = Number(ini.value)
        let ff = Number(fim.value)
        let pp = Number(pass.value)

        for(let cal = ii; cal <= ff; cal += pp) {
            res.innerHTML += `${cal} `
        }
    }
}