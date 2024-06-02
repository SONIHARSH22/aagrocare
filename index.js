const plantImages = {
    'Bell-Pepper':'./vegetable1/bell-pepper.jpg',
    'Tomato':'./vegetable1/fresh-red-tomatoes_2829-13449.avif',  
    'Eggplant':'./vegetable1/eggplant_144627-18693.avif',
    'Broccoli':'./vegetable1/fresh-broccoli-vegetable_144627- - Copy (2).avif',

    // Add more plant names, image sources, and links here
};

const modal = document.getElementById('myModal');
const addPlantButton = document.getElementById('addPlantButton');
const addPlantNameButton = document.getElementById('addPlantName');
const plantNameInput = document.getElementById('plantNameInput');
const plantContainer = document.getElementById('plantContainer');

// Load existing plant data from localStorage
const savedPlants = JSON.parse(localStorage.getItem('plants')) || [];

function showModal() {
    modal.style.display = 'block';
}

function hideModal() {
    modal.style.display = 'none';
}

function addPlant() {
    showModal();
}

function addPlantWithCustomName() {
    const name = plantNameInput.value.trim();

    if (!name) {
        alert('Please enter a valid plant name.');
        return;
    }

    const imgSrc = plantImages[name];

    if (!imgSrc) {
        alert('No image and link found for the specified plant name.');
        return;
    }

    //const { imgSrc, link } = plantData;
    createPlantDiv(name, imgSrc);
    hideModal();

    // Add the new plant to the savedPlants array
    savedPlants.push({ name, imgSrc });
    localStorage.setItem('plants', JSON.stringify(savedPlants));
}

function createPlantDiv(name, imgSrc,) {
    const div = document.createElement('div');
    div.className = 'your_plant';

    const img = document.createElement('img');
    img.className = 'your_plant_img';
    img.src = imgSrc;
    img.alt = '';

    const p = document.createElement('p');
    p.className = 'name1';
    p.textContent = name;

    const anchor = document.createElement('a');
    anchor.href = './' + name.toLowerCase() + '.html'; // Create a link based on the name
    anchor.style.display = 'none';

    div.appendChild(img);
    div.appendChild(p);
    p.appendChild(anchor);

    div.addEventListener('click', function () {
        anchor.click(); // Navigate to the specified link when the plant is clicked
    });

    plantContainer.appendChild(div);
    plantNameInput.value = '';
}

// Display existing plants from local storage when the page loads
savedPlants.forEach((plantData) => {
    const { name, imgSrc, link } = plantData;
    createPlantDiv(name, imgSrc, link);
});

addPlantButton.addEventListener('click', addPlant);
addPlantNameButton.addEventListener('click', addPlantWithCustomName);

const close = document.querySelector('.close');
close.addEventListener('click', hideModal);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

