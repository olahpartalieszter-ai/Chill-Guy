
const aranykopesek = [
    '"Majd holnap megcsinálom."',
    '"Tanárnő, a kutya megette a házimat."',
    '"De hát a többiek sem tanultak!"',
    '"Ez a doga most nem ér, mert raserants van."'
];
const memek = [ 'memek/mem1.jpg', 'memek/mem2.jpg', 'memek/mem3.jpg', 'memek/mem4.jpg', 'memek/mem5.jpg',
    'memek/mem6.jpg', 'memek/mem7.jpg', 'memek/mem8.jpg', 'memek/mem9.jpg', 'memek/mem10.jpg',
    'memek/mem11.jpg', 'memek/mem12.jpg', 'memek/mem13.jpg', 'memek/mem14.jpg', 'memek/mem15.jpg',
    'memek/mem16.jpg', 'memek/mem17.jpg', 'memek/mem18.jpg', 'memek/mem19.jpg', 'memek/mem20.jpg',
    'memek/mem21.jpg', 'memek/mem22.jpg', 'memek/mem23.jpg', 'memek/mem24.jpg', 'memek/mem25.jpg',
    'memek/mem26.jpg', 'memek/mem27.jpg', 'memek/mem28.jpg', 'memek/mem29.jpg', 'memek/mem30.jpg','memek/mem31.jpg'
];
const neKattintsGomb = document.getElementById('neKattintsGomb');
const sotetito = document.getElementById('sotetito');
const popupHatter = document.getElementById('popupHatter');
const bezarGomb = document.getElementById('bezarGomb');
const memKep = document.getElementById('memKep');
const stresszCsuszka = document.getElementById('stresszCsuszka');
const csuszkaSzoveg = document.getElementById('csuszkaSzoveg');
const ujAranykopesGomb = document.getElementById('ujAranykopesGomb');
const aranykopesSzoveg = document.getElementById('aranykopesSzoveg');
neKattintsGomb.addEventListener('click', () => {
    sotetito.style.background = 'rgba(0,0,0,0)';
    const randomMem = memek[Math.floor(Math.random() * memek.length)];
    memKep.src = randomMem;
    setTimeout(() => {
        popupHatter.style.display = 'flex';
    }, 200);
});
bezarGomb.addEventListener('click', () => {
    popupHatter.style.display = 'none';
    sotetito.style.background = 'rgba(15, 15, 26, 0.85)'; 
popupHatter.addEventListener('click', (e) => {
    if (e.target === popupHatter) {
        popupHatter.style.display = 'none';
        sotetito.style.background = 'rgba(15, 15, 26, 0.85)';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && popupHatter.style.display === 'flex') {
        popupHatter.style.display = 'none';
        sotetito.style.background = 'rgba(15, 15, 26, 0.85)';
    }
});

});
stresszCsuszka.addEventListener('input', () => {
    if (stresszCsuszka.value > 10) {
        csuszkaSzoveg.innerText = "Chill Guy! Mondtam, hogy ne stresszelj!";
        setTimeout(() => {
            stresszCsuszka.value = 0;
            csuszkaSzoveg.innerText = "Teljes CHILL...";
        }, 800);
    }
});
ujAranykopesGomb.addEventListener('click', () => {
    const randomIdezet = aranykopesek[Math.floor(Math.random() * aranykopesek.length)];
    aranykopesSzoveg.innerText = randomIdezet;
});
