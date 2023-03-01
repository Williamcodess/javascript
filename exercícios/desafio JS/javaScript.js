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
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')


       if (fsex[0].checked) {
        gênero = 'Homem'
            if (idade >=0 && idade <10) {
                //Criança
            img.setAttribute('src', 'foto-bebe-m.png')
            }
            if (idade < 21) {
                /*Jovem*/
            img.setAttribute('src', '')
            }
            if (idade < 50) {
                /*Adulto*/

            }
            else (idade > 50){
                /*Idoso*/
            }
       } else if (fsex[1].checked) {
        gênero = 'Mulher'
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos que você é ${gênero} e tem ${idade}`
       res.appendChild(img)
    }
}