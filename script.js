let godisnjeDobaFunkcija = ()=>{
    let getDatum = new Date();
    let mesec = getDatum.getMonth() + 1;
    let image = document.querySelector("#godDoba");
    switch(mesec){
        case 3: case 4 : case 5:
            return "Prolece je";
            break;
        case 6: case 7 : case 8:
            return "Leto je";
            break;
        case 9: case 10: case 11:
            return "Jesen je";
            break;

        case 12: case 1: case 2:
            return "Zima je";
            break;
    }
}

console.log(godisnjeDobaFunkcija());


// moramo da image.innerHTML += dodamo taj IMG;


let funkcijaZaFormu = ()=>{
    let racun = document.querySelector('.formDeo');
    let izracunaj = document.querySelector('.izracunaj');
    izracunaj.addEventListener('click', (e)=>{
        e.preventDefault();
        let ukupnaCena = 0;
        let celokupnaUkupnaCena = 0;
        let brojOdraslih = document.querySelector('#brojOdraslih');
        let brojDece = document.querySelector('#brojDece');
        let brojDana = document.querySelector('#brojDana');
        let hotelskiSmestaj = document.querySelector('#hotelskiSmestaj');
        let privatniSmestaj = document.querySelector('#privatniSmestaj');
        ukupnaCena = (parseInt(brojOdraslih.value)*30 + parseInt(brojDece.value)*25)*parseInt(brojDana.value);
        if(hotelskiSmestaj.checked){
            ukupnaCena = ukupnaCena*90/100;
        }else if(privatniSmestaj.checked){
            ukupnaCena = ukupnaCena;
        }

        racun.innerHTML += `<ul>`
        racun.innerHTML += `<li>Cena smestaja : ${ukupnaCena} </li>`;

        racun.innerHTML += `</ul>`
    })
}

funkcijaZaFormu();