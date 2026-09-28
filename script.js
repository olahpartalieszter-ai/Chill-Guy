let aktualisKepIndex = 0; 
const aranykopesek = [
    '"Tanár úr, a sportreferens az ilyen betegség?"',
    '"Mi az a részecskehatározó?"',
    '"A Habsburg-ház tronfosása"',
    '"Ami Erdélyben volt, az Erdélyben is marad!"',
    '"Tanárnő,lenyeltem a tollam. Ez most nem releváns!"',
    '"A Leventének nagyobb a homloka."',
    '"Gipsz Jakab saxofonozik."',
    '"Diagram, gyerek!!!!"',
    '"Magyar népzenei hangszer:szájharmonika"'
];

const memek = [ 
    'memek/mem1.jpg', 'memek/mem2.jpg', 'memek/mem3.jpg', 'memek/mem4.jpg', 'memek/mem5.jpg',
    'memek/mem6.jpg', 'memek/mem7.jpg', 'memek/mem8.jpg', 'memek/mem9.jpg', 'memek/mem10.jpg',
    'memek/mem11.jpg', 'memek/mem12.jpg', 'memek/mem13.jpg', 'memek/mem14.jpg', 'memek/mem15.jpg',
    'memek/mem16.jpg', 'memek/mem17.jpg', 'memek/mem18.jpg', 'memek/mem19.jpg', 'memek/mem20.jpg',
    'memek/mem21.jpg', 'memek/mem22.jpg', 'memek/mem23.jpg', 'memek/mem24.jpg', 'memek/mem25.jpg',
    'memek/mem26.jpg', 'memek/mem27.jpg', 'memek/mem28.jpg', 'memek/mem29.jpg', 'memek/mem30.jpg',
    'memek/mem31.jpg', 'memek/mem32.jpg'
];

const osztalyKepek = [];
for (let i = 0; i <= 161; i++) {
    if (i === 1 || i === 2) {
        osztalyKepek.push(`kep (0).jpg`); // Itt javítva a hiányzó idézőjel és zárójel!
    } else {
        osztalyKepek.push(`kep (${i}).jpg`); // Közvetlenül a főmappából olvassa a képeket
    }
}

const neKattintsGomb = document.getElementById('neKattintsGomb');
const sotetito = document.getElementById('sotetito');
const popupHatter = document.getElementById('popupHatter');
const bezarGomb = document.getElementById('bezarGomb');
const memKep = document.getElementById('memKep');
const stresszCsuszka = document.getElementById('stresszCsuszka');
const csuszkaSzoveg = document.getElementById('csuszkaSzoveg');
const ujAranykopesGomb = document.getElementById('ujAranykopesGomb');
const aranykopesSzoveg = document.getElementById('aranykopesSzoveg');
const megnyitGaleriaGomb = document.getElementById('megnyitGaleriaGomb');
const galeriaPopupHatter = document.getElementById('galeriaPopupHatter');
const bezarGaleriaGomb = document.getElementById('bezarGaleriaGomb');
const galeriaFoto = document.getElementById('galeriaFoto');
const elozoKepGomb = document.getElementById('elozoKepGomb');
const kovetkezoKepGomb = document.getElementById('kovetkezoKepGomb');

// Mém Pop-up megnyitása
neKattintsGomb.addEventListener('click', () => {
    sotetito.style.background = 'rgba(0,0,0,0)';
    const randomMem = memek[Math.floor(Math.random() * memek.length)];
    memKep.src = randomMem;
    setTimeout(() => {
        popupHatter.style.display = 'flex';
    }, 200);
});

// Mém Pop-up bezárása gombbal
bezarGomb.addEventListener('click', () => {
    popupHatter.style.display = 'none';
    sotetito.style.background = 'rgba(15, 15, 26, 0.85)'; 
});

// Mém bezárás kívülre kattintással
popupHatter.addEventListener('click', (e) => {
    if (e.target === popupHatter) {
        popupHatter.style.display = 'none';
        sotetito.style.background = 'rgba(15, 15, 26, 0.85)';
    }
});

// Mém bezárás ESC gombbal
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && popupHatter.style.display === 'flex') {
        popupHatter.style.display = 'none';
        sotetito.style.background = 'rgba(15, 15, 26, 0.85)';
    }
});

// Stressz csúszka
stresszCsuszka.addEventListener('input', () => {
    if (stresszCsuszka.value > 10) {
        csuszkaSzoveg.innerText = "Chill Guy! Mondtam, hogy ne stresszelj!";
        setTimeout(() => {
            stresszCsuszka.value = 0;
            csuszkaSzoveg.innerText = "Teljes CHILL...";
        }, 800);
    }
});

// Új aranymondás generálása
ujAranykopesGomb.addEventListener('click', () => {
    const randomIdezet = aranykopesek[Math.floor(Math.random() * aranykopesek.length)];
    aranykopesSzoveg.innerText = randomIdezet;
});

// Galéria megnyitása
megnyitGaleriaGomb.addEventListener('click', () => {
    sotetito.style.background = 'rgba(0,0,0,0)'; 
    aktualisKepIndex = 0; 
    galeriaFoto.src = osztalyKepek[aktualisKepIndex];
    setTimeout(() => { 
        galeriaPopupHatter.style.display = 'flex'; 
    }, 200);
});

// Galéria bezárása gombbal
bezarGaleriaGomb.addEventListener('click', () => {
    galeriaPopupHatter.style.display = 'none';
    sotetito.style.background = 'rgba(15, 15, 26, 0.85)';
});

// Galéria: Következő kép
kovetkezoKepGomb.addEventListener('click', () => {
    aktualisKepIndex++;
    if (aktualisKepIndex >= osztalyKepek.length) {
        aktualisKepIndex = 0; 
    }
    galeriaFoto.src = osztalyKepek[aktualisKepIndex];
});

// Galéria: Előző kép
elozoKepGomb.addEventListener('click', () => {
    aktualisKepIndex--;
    if (aktualisKepIndex < 0) {
        aktualisKepIndex = osztalyKepek.length - 1; 
    }
    galeriaFoto.src = osztalyKepek[aktualisKepIndex];
});

// Galéria bezárás kívülre kattintással
window.addEventListener('click', (e) => {
    if (e.target === galeriaPopupHatter) {
        galeriaPopupHatter.style.display = 'none';
        sotetito.style.background = 'rgba(15, 15, 26, 0.85)';
    }
});
