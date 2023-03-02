function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    /*Isso acima é para definir o ano*/
    var fano = document.getElementById('txtano')/*Isso é para dizer ao computador qual a idade a pessoa escolheu */
    var res = window.document.querySelector('div#rest')

    if (fano.value.length == 0 || Number(fano.value) > ano || (fano.value) <= 0) {
        window.alert('[ERRO] Verifique os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var imag = document.getElementById('immg')

        if (fsex[0].checked) {
            gênero = 'Homem'
                if (idade >= 0 && idade < 10) {
                    //Criança
                    imag.style.backgroundImage = "url('foto-bebe-f.png')"
                } else if (idade > 10 && idade <= 21) {
                    /*Jovem*/
                    imag.style.backgroundImage = "url('foto-jovem-m.png')"
                } else if (idade > 21 && idade < 50) {
                    // Adulto
                    imag.style.backgroundImage = "url('foto-adulto-m.png')"
                } else {
                    /*Idoso*/
                    imag.style.backgroundImage = "url('foto-idoso-m.png')"
                }
            } else if (fsex[1].checked) {
            gênero = 'Mulher'
                if (idade >= 0 && idade < 10) {
                    //Criança
                    imag.style.backgroundImage = "url('foto-bebe-f.png')"
                } else if (idade > 10 && idade <= 21) {
                    /*Jovem*/
                    imag.style.backgroundImage = "url('foto-jovem-f.png')"
                } else if (idade > 21 && idade < 50) {
                    // Adulto
                    imag.style.backgroundImage = "url('foto-adulto-f.png')"
                } else {
                    /*Idoso*/
                    imag.style.backgroundImage = "url('foto-idoso-f.png')"
                }
             }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que você é ${gênero} e tem ${idade} anos` 
     }
}