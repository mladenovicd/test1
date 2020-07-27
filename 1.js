//Prvi zadatak

let kolicina = 9;
let cenaPoKomadu = 180;
let godine = 21;
let racun;

let cena = kolicina * cenaPoKomadu;
console.log(cena);
let cena15popust = cena - (cena*15/100); //cena sa 15% popusta za deljive sa 7
let cena25popust = cena - (cena*25/100); //cena sa 25% popusta za deljive sa 11

if(godine>18 && godine%7 ==0){
    racun = cena15popust;
    console.log('Racun iznosi: ' + racun);
}
else if(godine>18 && godine%11==0){
    racun = cena25popust;
    console.log('Racun iznosi: ' + racun);
}
else if(godine<=18){
    console.log('Nije dozvoljen ulaz licima koja imaju 18 ili manje od 18god')
}



