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
}