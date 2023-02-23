var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são ${horas}:00 horas`)
if (horas >= 0 && horas <= 6){
    console.log('Boa Madrugada!')
}else if(horas >= 6 && horas <= 12){
    console.log('Bom dia!')
}else if(horas > 12 && horas < 18){
    console.log('Boa tarde!')
}else if(horas >= 18 && horas <= 24){
    console.log('Boa Noite!')
}else{
    console.log ('Essa hora não existe')
}
