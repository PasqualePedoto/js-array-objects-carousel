// ## Consegna
// Dato un array di oggetti letterali con:
// - url dell’immagine
// - titolo
// - descrizione
// Creare un carosello ispirandosi alla foto allegata. Potete anche usare come base il carosello 
// dell'esercizio precedente
// ## Milstone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: 
// costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
// ## Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente
// il carosello. Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà
// visibile e dovremo aggiungervi titolo e testo.
// ## Milestone 2:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente 
// clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per 
// l’ultima miniatura se l’utente clicca la freccia verso sinistra.

// ---

// ## BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

// ## BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva
// dovrà cambiare alla successiva.

// ## BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

// ---

// Array da usare:

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
];

// # MILESTONE 1

// * Creiamo dinamicamente l'HTML partendo da js :
// @ Bersagliamo gli elementi nel DOM

const carousel = document.getElementById('carousel');
const description = document.getElementById('description');
const thumbnails = document.getElementById('thumbnails');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const invertButton = document.getElementById('invert-auto');

// @ Funzioni

const insertImageinCarousel = (image, index) => {

    const { url, title, description } = image;

    //Creiamo un element figure
    const figureElement = document.createElement('figure');
    figureElement.classList.add('w-100', 'h-100', 'position-relative');
    figureElement.dataset.number = `image-${index}`;
    figureElement.id = `image-carousel-${index}`;
    if (index !== 0) figureElement.classList.add('d-none');
    else {
        figureElement.classList.add('active');
        description.inn
    }

    //Creiamo un element img
    const imgElement = document.createElement('img');

    imgElement.src = url;
    imgElement.alt = title;

    const text = document.createElement('div');
    text.classList.add('description');
    text.innerHTML = `${title}<br>${description}`;
    figureElement.appendChild(text);

    //Agganciamo l'img e il figure
    figureElement.appendChild(imgElement);
    carousel.appendChild(figureElement);

}

const insertImageinThumbnails = (image, index) => {
    const { url, title, description } = image;

    //Creiamo un element figure
    const figureElement = document.createElement('figure');
    figureElement.classList.add('w-100', 'h-100');
    figureElement.dataset.number = `image-${index}`;
    figureElement.id = `image-thumb-${index}`;
    if (index !== 0) figureElement.classList.add('not-active-image-thumb');
    else figureElement.classList.add('active-image-thumb');

    //Creiamo un element img
    const imgElement = document.createElement('img');

    imgElement.src = url;
    imgElement.alt = title;

    //Agganciamo l'img e il figure
    figureElement.appendChild(imgElement);
    thumbnails.appendChild(figureElement);
}

const insertScrollRightAndLeft = () => {
    carousel.innerHTML += `<button id="left-scroll" class="border-0"><i class="fa-solid fa-caret-left fa-2x"></i></button>
    <button id="right-scroll" class="border-0"><i class="fa-solid fa-caret-right fa-2x"></i></button>`
}

const disabledThumbFigure = (allThumbFigure, figure) => {
    allThumbFigure.forEach((oldFigure) => {
        if (oldFigure.classList.contains('active-image-thumb')) {
            oldFigure.classList.remove('active-image-thumb')
            oldFigure.classList.add('not-active-image-thumb')
        }
    });

    figure.classList.remove('not-active-image-thumb');
    figure.classList.add('active-image-thumb');
}

const disabledCarouselFigure = (allCarouselFigure) => {
    allCarouselFigure.forEach((oldFigure) => {
        if (oldFigure.classList.contains('active')) {
            oldFigure.classList.remove('active')
            oldFigure.classList.add('d-none');
        }
    });
}

// Inseriamo le singole immagini e gli scroll laterali

images.forEach((image, index) => {
    insertImageinCarousel(image, index);
    insertImageinThumbnails(image, index)
});

insertScrollRightAndLeft();

// # Milestone 2 

// @ Bersagliamo i bottoni ed abilitiamo lo scroll laterale

const rightButton = document.getElementById('right-scroll');
const leftButton = document.getElementById('left-scroll');
const allThumbFigure = document.querySelectorAll('#thumbnails figure');
const allCarouselFigure = document.querySelectorAll('#carousel figure');

// @ Definiamo la logica dei bottoni con gli addEventListener

// * Bottone di destra

let currentPosition = 0;

const listOfFigure = document.querySelectorAll('#carousel figure');

rightButton.addEventListener('click', () => {
    listOfFigure[currentPosition].classList.remove('active');
    listOfFigure[currentPosition].classList.add('d-none');

    if (currentPosition === listOfFigure.length - 1) currentPosition = 0;
    else currentPosition++;

    listOfFigure[currentPosition].classList.remove('d-none');
    listOfFigure[currentPosition].classList.add('active');
});

// * Bottone di sinistra

leftButton.addEventListener('click', () => {
    listOfFigure[currentPosition].classList.remove('active');
    listOfFigure[currentPosition].classList.add('d-none');

    if (currentPosition === 0) currentPosition = listOfFigure.length - 1;
    else currentPosition--;

    listOfFigure[currentPosition].classList.remove('d-none');
    listOfFigure[currentPosition].classList.add('active');
});

// # BONUS 1

allThumbFigure.forEach((figure, index) => {
    figure.addEventListener('click', () => {

        // Disabilito la figure nel thumbnails che è in active
        disabledThumbFigure(allThumbFigure, figure);

        //******************* */

        // Disabilito la figure nel carousel che è in active
        disabledCarouselFigure(allCarouselFigure);

        const newVisual = document.getElementById(`image-carousel-${index}`)

        newVisual.classList.remove('d-none');
        newVisual.classList.add('active');

        currentPosition = index;
    })
});

// # BONUS 2

// const timerInterval = setInterval(() => {
//     listOfFigure[currentPosition].classList.remove('active');
//     listOfFigure[currentPosition].classList.add('d-none');

//     if (currentPosition === listOfFigure.length - 1) currentPosition = 0;
//     else currentPosition++;

//     listOfFigure[currentPosition].classList.remove('d-none');
//     listOfFigure[currentPosition].classList.add('active');
// }, 3000);

// # BONUS 3
let timerInterval;

startButton.addEventListener('click', () => {
    timerInterval = setInterval(() => {
        listOfFigure[currentPosition].classList.remove('active');
        listOfFigure[currentPosition].classList.add('d-none');

        if (currentPosition === listOfFigure.length - 1) currentPosition = 0;
        else currentPosition++;

        listOfFigure[currentPosition].classList.remove('d-none');
        listOfFigure[currentPosition].classList.add('active');
    }, 3000);
})

stopButton.addEventListener('click', () => {
    clearInterval(timerInterval);
})

invertButton.addEventListener('click', () => {
    timerInterval = setInterval(() => {
        listOfFigure[currentPosition].classList.remove('active');
        listOfFigure[currentPosition].classList.add('d-none');

        if (currentPosition === 0) currentPosition = listOfFigure.length - 1;
        else currentPosition--;

        listOfFigure[currentPosition].classList.remove('d-none');
        listOfFigure[currentPosition].classList.add('active');
    }, 3000);
})

