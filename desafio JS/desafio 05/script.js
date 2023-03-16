function gerar() {
    var num = document.getElementById('inum')
    var resp = document.getElementById('res')
    var gera = document.getElementById('gerar')

    var tabuada = Number(num.value)
    var one = 10

    if ( tabuada == 1 ){
    while (tabuada <= 10) {
        resp.innerHTML = `${tabuada} X 1 =`
    }
    }
}
