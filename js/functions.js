
function generoiUusiRivi() {
    const taulukko = document.getElementById('jokeriTaulukko');
    const lkmElementti = document.getElementById('arvottujenRivienLkm');

    // Lisää uuden rivin HTML-taulukkoon
    const uusiRivi = taulukko.insertRow();

    // Suorita toistolause 7 kertaa
    for (let i = 0; i < 7; i++) {
        // Luo uuden solun
        const uusiSolu = uusiRivi.insertCell();

        // Aseta satunnaisluku välillä 0-9 solun tekstiksi
        const satunnaisluku = Math.floor(Math.random() * 10);
        uusiSolu.innerText = satunnaisluku;
    }

    // Päivitä arvottujen rivien lukumäärä
    let arvottujenRivienLkm = parseInt(lkmElementti.innerText.split(' ')[2]) + 1;
    lkmElementti.innerText = `Arvottuja rivejä: ${arvottujenRivienLkm}`;
}