const menu = document.querySelector('.menu-button');
const popUp = document.querySelector('.pop');
const lecture = document.querySelector('.lecture');


menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    popUp.classList.toggle('active');
});

document.querySelectorAll('.menu-links').forEach((i) => i.addEventListener('click', () => {
    menu.classList.remove('active');
    popUp.classList.remove('active');
}));

const speakers = [{
    photo: "images/speaker1.jpg",
    name: "Speaker One",
    job: 'International Director X-Cel Specialty Contacts',
    line: "url",
    description: 'Speaker One is an educator and researcher, she received her degree in Optometry from "UNLP" in Argentina and has been the head of the Contact Lens department for the last 3 years.'
}, {
    photo: "images/speaker2.jpg",
    name: "Speaker Two",
    job: 'International Director X-Cel Specialty Contacts',
    line: "url",
    description: 'Speaker One is an educator and researcher, she received her degree in Optometry from "UNLP" in Argentina and has been the head of the Contact Lens department for the last 3 years.'
}, {
    photo: "images/speaker3.jpg",
    name: "Speaker Three",
    job: 'International Director X-Cel Specialty Contacts',
    line: "url",
    description: 'Speaker One is an educator and researcher, she received her degree in Optometry from "UNLP" in Argentina and has been the head of the Contact Lens department for the last 3 years.'
}, {
    photo: "images/speaker4.jpg",
    name: "Speaker Four",
    job: 'International Director X-Cel Specialty Contacts',
    line: "url",
    description: 'Speaker One is an educator and researcher, she received her degree in Optometry from "UNLP" in Argentina and has been the head of the Contact Lens department for the last 3 years.'
}, {
    photo: "images/speaker5.jpg",
    name: "Speaker Five",
    job: 'International Director X-Cel Specialty Contacts',
    line: "url",
    description: 'Speaker One is an educator and researcher, she received her degree in Optometry from "UNLP" in Argentina and has been the head of the Contact Lens department for the last 3 years.'
}, {
    photo: "images/speaker6.jpg",
    name: "Speaker Six",
    job: 'International Director X-Cel Specialty Contacts',
    line: "url",
    description: 'Speaker One is an educator and researcher, she received her degree in Optometry from "UNLP" in Argentina and has been the head of the Contact Lens department for the last 3 years.'
}];

const speakersTitle = document.createElement('h1');
speakersTitle.classList = 'speakerTitle';
const speakerText = document.createTextNode('Featured Speakers');
speakersTitle.appendChild(speakerText);
document.getElementById('mainSection').appendChild(speakersTitle);

const speakerLine = document.createElement('div');
speakerLine.classList = 'speakerLine';
speakersTitle.append(speakerLine);

for (let i = 0; i < speakers.length; i += 1) {
    const mainContainer = document.createElement('div');
    const program = document.querySelector('#program');
    mainContainer.classList = 'mainContainer';
    document.getElementById('mainSection').appendChild(mainContainer);

    const mainDiv = document.createElement('div');
    mainDiv.classList = 'mainDiv';
    mainContainer.append(mainDiv);

    const cardImage = document.createElement('img');
    cardImage.src = speakers[i].photo;
    mainDiv.append(cardImage);

    const secondDiv = document.createElement('div');
    secondDiv.classList = 'seconDiv';
    mainDiv.append(secondDiv);

    const cardH2 = document.createElement('h2');
    cardH2.className = 'cardh2';
    const textCard = document.createTextNode(speakers[i].name);
    cardH2.appendChild(textCard);
    secondDiv.append(cardH2);

    const lineDiv = document.createElement('div');
    lineDiv.classList = 'lineDiv';
    secondDiv.append(lineDiv);

    const subtextCard2 = document.createElement('p');
    subtextCard2.className = 'job';
    const positCard2 = document.createTextNode(speakers[i].job);
    subtextCard2.appendChild(positCard2);
    secondDiv.append(subtextCard2);

    const subtextCard3 = document.createElement('p');
    subtextCard3.className = 'description';
    const positCard3 = document.createTextNode(speakers[i].description);
    subtextCard3.appendChild(positCard3);
    secondDiv.append(subtextCard3);

    if (i === 1) {
        const speakerButton = document.createElement('button');
        speakerButton.classList = 'speakerButton';
        const buttonText2 = document.createTextNode('MORE');
        speakerButton.append(buttonText2);
        document.getElementById('mainSection').appendChild(speakerButton);

        const arrowIcon = document.createElement('img');
        arrowIcon.className = 'arrowIcon';
        arrowIcon.src = 'images/arrow.png';
        speakerButton.append(arrowIcon);

        const buttonS = document.querySelector('.speakerButton');

        const speakerButton2 = document.createElement('button');
        speakerButton2.classList = 'speakerButton2';
        const buttonText3 = document.createTextNode('LESS');
        speakerButton2.append(buttonText3);
        document.getElementById('mainSection').appendChild(speakerButton2);

        const arrowIcon2 = document.createElement('img');
        arrowIcon2.className = 'arrowIcon2';
        arrowIcon2.src = 'images/arrow2.png';
        speakerButton2.append(arrowIcon2);

        const buttonS2 = document.querySelector('.speakerButton2');

        buttonS.addEventListener('click', () => {
            const boxes = document.getElementsByClassName('mainContainer');
            for (const box of boxes) {
                box.classList.toggle('active');
                speakerButton.style.order = 2;
                speakerButton2.style.display = 'flex';
                speakerButton2.style.order = 3;
                speakerButton.style.display = 'none'
            }
        });

        buttonS.addEventListener('click', () => {
            const boxes2 = document.getElementsByClassName('mainContainer3');
            const boxes3 = document.getElementsByClassName('mainContainer4');
            for (const box of boxes2) {
                box.classList.toggle('active');
            }

            for (const box of boxes3) {
                if ((speakerButton.style.order = 2)) {
                    box.classList.toggle('active');
                }
            }
        });

        buttonS2.addEventListener('click', () => {
            const boxes2 = document.getElementsByClassName('mainContainer3');
            const boxes3 = document.getElementsByClassName('mainContainer4');
            for (const box of boxes2) {
                box.classList.remove('active');
                buttonS.style.display = 'flex';
                buttonS2.style.display = 'none';
            }

            for (const box of boxes3) {
                if ((speakerButton.style.order = 2)) {
                    box.classList.remove('active');
                }
            }
        });
    }

    if (i === 2) {
        mainDiv.className = 'mainDiv3';
        mainContainer.className = 'mainContainer3';
    } else if (i === 3) {
        mainDiv.className = 'mainDiv4';
        mainContainer.className = 'mainContainer3';
    } else if (i === 4) {
        mainDiv.className = 'mainDiv5';
        mainContainer.className = 'mainContainer4';
    } else if (i === 5) {
        mainDiv.className = 'mainDiv6';
        mainContainer.className = 'mainContainer4';

    }
}