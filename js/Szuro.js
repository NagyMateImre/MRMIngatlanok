const Ingatlanok = document.getElementById('Ingatlanok'); // Ezt nem használod a kódban, de itt hagyom
const JSONKapott = localStorage.getItem('Tomb');
const JsonAlakitott = JSON.parse(JSONKapott);

const szuloElem = document.getElementById('Ingatlanok');

for (let i = 0; i < JsonAlakitott.length; i++) {
    const linkElem = document.createElement('a');
    const cimElem = document.createElement('h3');

    linkElem.setAttribute('onclick', 'ModalOpen(this)');
    linkElem.setAttribute('href', '#modal');
    linkElem.id = 'modal' + JsonAlakitott[i].id; 
    linkElem.className = 'property-card';

    linkElem.setAttribute('data-Hely', JsonAlakitott[i].Helyszin);
    linkElem.setAttribute('data-ar', JsonAlakitott[i].arMax);
    linkElem.setAttribute('data-elhely', JsonAlakitott[i].Elhelyezkedes);
    linkElem.setAttribute('data-tipus', JsonAlakitott[i].Tipus);
    linkElem.setAttribute('data-szobak', JsonAlakitott[i].szobak);
    linkElem.setAttribute('data-terulet', JsonAlakitott[i].Terulet);

    cimElem.textContent = JsonAlakitott[i].Helyszin + ", " + JsonAlakitott[i].Elhelyezkedes;

    linkElem.appendChild(cimElem);
    szuloElem.appendChild(linkElem);
}

const form = document.querySelector('.filter-sidebar form');
const card = document.querySelectorAll('.property-card');
const arMin = document.getElementById('price-min');
const arMax = document.getElementById('price-max');
const Terulet = document.getElementById('Terulet');


const modal = document.getElementById('modal');
const ModalName = document.getElementById('ModalName');
const ModalAr = document.getElementById('ModalAr');
const ModalTerulet = document.getElementById('ModalTerulet');
const ModalSzobak = document.getElementById('ModalSzobak');
const ModalLeiras = document.getElementById('ModalLeiras');
modal.style.display = "none";

function ModalOpen(clickedElement) {
    modal.style.display = "flex";
    
    const fullId = clickedElement.id; 
    const match = fullId.match(/(\d+)$/);

    let lastNumberId = null;

    if (match && match[1]) {
        lastNumberId = parseInt(match[1]); 
    }


    ModalName.textContent = `${JsonAlakitott[lastNumberId-1].Helyszin} - ${JsonAlakitott[lastNumberId-1].Elhelyezkedes} --- ${JsonAlakitott[lastNumberId].Tipus}`;
    ModalAr.textContent = `Ár: ${JsonAlakitott[lastNumberId-1].arMax} FT`;
    ModalTerulet.textContent = `Alapterület: ${JsonAlakitott[lastNumberId].Terulet} m²`
    ModalSzobak.textContent = `Szobák száma: ${JsonAlakitott[lastNumberId].szobak}`
}

function ModalClose(){
    modal.style.display = "none";
}


if(card.length > 0){
var TeruletMin = Infinity;
card.forEach(card => {
    const cardTeruletMin = parseInt(card.dataset.terulet);
    if(cardTeruletMin < TeruletMin){
        TeruletMin = cardTeruletMin;
    }
});
Terulet.setAttribute('min', TeruletMin)
document.getElementById('TeruletKI').textContent = TeruletMin + " m²";
}

if(card.length > 0){
let TeruletMax = 0;
card.forEach(card => {
    const cardTeruletMax = parseInt(card.dataset.terulet);
    if(cardTeruletMax > TeruletMax){
        TeruletMax = cardTeruletMax;
    }
});
Terulet.setAttribute('max', TeruletMax);
}

if (card.length > 0) {
    let lowPrice = Infinity;
    card.forEach(card => {
        const cardPrice = parseInt(card.dataset.ar);
        if (cardPrice < lowPrice) {
            lowPrice = cardPrice;
        }
    });
    arMin.setAttribute('min', lowPrice);
    arMax.setAttribute('min', lowPrice);
    console.log(`A minimális ár a listában: ${lowPrice}. A beviteli mező min attribútuma beállítva.`);
    document.getElementById('minPriceTEXT').textContent = lowPrice + " FT";
    document.getElementById('maxPriceTEXT').textContent = lowPrice + " FT";

}

if (card.length > 0) {
    let MaxPrice = 0;
    card.forEach(card => {
        const cardPrice = parseInt(card.dataset.ar);
        if (cardPrice > MaxPrice) {
            MaxPrice = cardPrice;
        }
    });
    arMax.setAttribute('max', MaxPrice);
    arMin.setAttribute('max', MaxPrice);
    console.log(`A minimális ár a listában: ${MaxPrice}. A beviteli mező min attribútuma beállítva.`);
}

function MinP() {
const arMinInput = document.getElementById('price-min');
const minPriceTextElement = document.getElementById('minPriceTEXT');
minPriceTextElement.textContent = arMinInput.value + " Ft"; 
}

function MaxP() {
const arMaxInput = document.getElementById('price-max');
const maxPriceTextElement = document.getElementById('maxPriceTEXT');
maxPriceTextElement.textContent = arMaxInput.value + " Ft";
}

function TeruletT() {
const TeruletKiiras = document.getElementById('Terulet');
const TeruletText = document.getElementById('TeruletKI');
TeruletText.textContent = TeruletKiiras.value + " m²";
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    function toNormalForm(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    const hely = document.getElementById('location').value.toLowerCase();
    const arMaxi = parseInt(arMax.value);
    const arMini = parseInt(arMin.value);
    const elhely = document.getElementById('localization').value;
    const tipus = document.getElementById('type').value;
    const szobak = document.getElementById('rooms').value;
    const Teruleti = parseInt(Terulet.value);


    card.forEach(card => {
        const cardHely = toNormalForm(card.dataset.hely?.toLowerCase() || "");
        const cardAr = parseInt(card.dataset.ar) || 0;
        const cardElhely = card.dataset.elhely || "";
        const cardTipus = card.dataset.tipus || "";
        const cardSzobak = card.dataset.szobak || "";
        const cardTerulet = card.dataset.terulet || 0;

        let show = true;

        const helyClean = toNormalForm(hely);

        if(helyClean !== cardHely && cardHely != " "){
            show = false
        }

        if (helyClean == ""){
            show = true
        }
        
        if(cardAr < arMini || cardAr > arMaxi){
            show = false
        }

        if(elhely !== "Mindegy" && cardElhely !== elhely){
            show = false
        }
        
        if(tipus !== "Mindegy" && cardTipus !== tipus){
            show = false
        }
        
        if(szobak !== "Mindegy" && cardSzobak !== szobak){
            show = false
        }

        if(cardTerulet < Teruleti - 15 || cardTerulet > Teruleti + 15){
            show = false
        }

        card.style.opacity = show ? "100%" : "50%";
    });
});

const clearBtn = document.getElementById('szuroTorles');

clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
    card.forEach(card => {
        card.style.display = 'block';
        MinP();
        MaxP();
        TeruletT();
        card.style.opacity = "100%";
    });
});