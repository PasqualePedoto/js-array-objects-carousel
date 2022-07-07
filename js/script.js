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

// @ Funzioni

const insertImage = (image, index) => {

    const { url, title, description } = image;

    //Creiamo un element figure
    const figureElement = document.createElement('figure');
    figureElement.classList.add('w-100', 'h-100');
    figureElement.dataset.number = `image-${index}`;
    if (index !== 0) figureElement.classList.add('d-none');

    //Creiamo un element img
    const imgElement = document.createElement('img');

    imgElement.src = url;
    imgElement.alt = title;

    //Agganciamo l'img e il figure
    figureElement.appendChild(imgElement);
    carousel.appendChild(figureElement);

}

const insertScrollRightAndLeft = () => {
    carousel.innerHTML += `<button id="left-scroll" class="border-0"><i class="fa-solid fa-caret-left fa-2x"></i></button>
    <button id="right-scroll" class="border-0"><i class="fa-solid fa-caret-right fa-2x"></i></button>`
}

// Inseriamo le singole immagini e gli scroll laterali

images.forEach((image, index) => {
    insertImage(image, index);
});

insertScrollRightAndLeft();

// # Milestone 2 

// @ Bersagliamo i bottoni ed abilitiamo lo scroll laterale

const rightButton = document.getElementById('right-scroll');
const leftButton = document.getElementById('left-scroll');

// @ Definiamo la logica dei bottoni con gli addEventListener

// * Bottone di destra

let currentPosition = 0;

const listOfFigure = document.querySelectorAll('#carousel figure');

rightButton.addEventListener('click', () => {
    listOfFigure[currentPosition].classList.add('d-none');

    if (currentPosition === listOfFigure.length - 1) currentPosition = 0;
    else currentPosition++;

    listOfFigure[currentPosition].classList.remove('d-none');
});

// * Bottone di sinistra

leftButton.addEventListener('click', () => {
    listOfFigure[currentPosition].classList.add('d-none');

    if (currentPosition === 0) currentPosition = listOfFigure.length - 1;
    else currentPosition--;

    listOfFigure[currentPosition].classList.remove('d-none');
});

