let agr =[2, 5, 1, 3, 1]
agr.push(7)
agr.sort()

for(let poke in agr) {
    console.log(`O índice ${poke} tem o valor \u{1F449} ${agr[poke]}`)
}

/* EXERCITANDO

for (let poke=0; poke<agr.length; poke++) {
    console.log(`O índice ${poke} tem valor \u{1F449}${agr[poke]}`)
}

var poke = 0
while (poke < agr.length) {
    console.log(`O índice ${poke} tem o valor \u{1F449} ${agr[poke]}`)
}

*/
