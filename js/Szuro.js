const form = document.querySelector('.filter-sidebar form');
const card = document.querySelectorAll('.property-card');
localStorage.setItem("Card",card);
const arMin = document.getElementById('price-min');
const arMax = document.getElementById('price-max');
const Terulet = document.getElementById('Terulet');

if(card.length > 0){
let TeruletMin = Infinity;
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

        if(helyClean !== cardHely){
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

        card.style.display = show ? "block" : "none";
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
    });
});

    document.addEventListener('DOMContentLoaded', () => {
        const track = document.querySelector('.carousel-track');
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.carousel-button.next');
        const prevButton = document.querySelector('.carousel-button.prev');
        const nav = document.querySelector('.carousel-nav');
        const indicators = Array.from(nav.children);

        // Meghatározza a dia szélességét
        const slideWidth = slides[0].getBoundingClientRect().width;

        // A diák elrendezése egymás mellé (kezdeti pozíció beállítása)
        const setSlidePosition = (slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        };
        slides.forEach(setSlidePosition);

        // Funkció a diához ugráshoz
        const moveToSlide = (track, currentSlide, targetSlide) => {
            // A diák eltolása
            track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
            
            // Osztályok frissítése a láthatósághoz
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        };

        // Funkció a navigációs pontok frissítéséhez
        const updateIndicators = (currentIndicator, targetIndicator) => {
            currentIndicator.classList.remove('current-slide');
            targetIndicator.classList.add('current-slide');
        };

        // KATTINTÁS a Jobb gombra
        nextButton.addEventListener('click', () => {
            const currentSlide = track.querySelector('.current-slide');
            // A következő dia a jelenlegi utáni elem
            const nextSlide = currentSlide.nextElementSibling || slides[0]; // Vissza az elsőre, ha a végén vagyunk
            
            const currentIndicator = nav.querySelector('.current-slide');
            const nextIndicator = currentIndicator.nextElementSibling || indicators[0];

            moveToSlide(track, currentSlide, nextSlide);
            updateIndicators(currentIndicator, nextIndicator);
        });

        // KATTINTÁS a Bal gombra
        prevButton.addEventListener('click', () => {
            const currentSlide = track.querySelector('.current-slide');
            // Az előző dia a jelenlegi előtti elem
            const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1]; // Az utolsóra, ha az elején vagyunk
            
            const currentIndicator = nav.querySelector('.current-slide');
            const prevIndicator = currentIndicator.previousElementSibling || indicators[indicators.length - 1];

            moveToSlide(track, currentSlide, prevSlide);
            updateIndicators(currentIndicator, prevIndicator);
        });
        
        // KATTINTÁS a Navigációs pontokra
        nav.addEventListener('click', e => {
            const targetIndicator = e.target.closest('button');
            
            if (!targetIndicator || !targetIndicator.classList.contains('carousel-indicator')) return; // Ha nem gombra kattintott

            const currentSlide = track.querySelector('.current-slide');
            const currentIndicator = nav.querySelector('.current-slide');
            
            const targetIndex = indicators.findIndex(indicator => indicator === targetIndicator);
            const targetSlide = slides[targetIndex];

            moveToSlide(track, currentSlide, targetSlide);
            updateIndicators(currentIndicator, targetIndicator);
        });

        // Eseménykezelő a reszponzivitás javítására: újrapozicionálás átméretezéskor
        window.addEventListener('resize', () => {
            slides.forEach(setSlidePosition);
            // Áthelyezzük a track-et a megfelelő helyre az új szélesség alapján
            const currentSlide = track.querySelector('.current-slide');
            track.style.transform = 'translateX(-' + currentSlide.style.left + ')';
        });

    });