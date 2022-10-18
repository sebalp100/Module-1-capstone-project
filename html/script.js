const menu = document.querySelector('.menu-button');
const popUp = document.querySelector('.pop');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  popUp.classList.toggle('active');
});

document.querySelectorAll('.menu-links').forEach((i) => i.addEventListener('click', () => {
  menu.classList.remove('active');
  popUp.classList.remove('active');
}));

const speakers = [{
  photo: 'images/speaker1.jpg',
  name: 'Speaker One',
  job: 'International Director X-Cel Specialty Contacts',
  line: 'url',
  description: 'Speaker One is an educator and researcher, she received her degree in Optometry from "UNLP" in Argentina and has been the head of the Contact Lens department for the last 3 years.',
}, {
  photo: 'images/speaker2.jpg',
  name: 'Speaker Two',
  job: 'Marketing Director X-Cel Specialty Contacts',
  line: 'url',
  description: 'Speaker Two has a Gwinnett University (May 2004) Bachelor degree in Business administration and international business Marketing.',
}, {
  photo: 'images/speaker3.jpg',
  name: 'Speaker Three',
  job: 'CEO M-Flex Contact Lenses',
  line: 'url',
  description: 'Speaker Three is a Optical technician specialized in contact lenses, Sterilization technician and a Ophthalmology technician. Has a diploma in Optometry and a degree in Visual Rehabilitation.',
}, {
  photo: 'images/speaker4.jpg',
  name: 'Speaker Four',
  job: 'Co-investigator in Eye-Risk Clinic',
  line: 'url',
  description: 'Speaker Four works as an optician-optometrist and researcher at the Institut de la Màcula and at the Barcelona Macula Foundation (Hospital Quirón Teknon, Barcelona).',
}, {
  photo: 'images/speaker5.jpg',
  name: 'Speaker Five',
  job: 'Deputy Chief for the corneal bank eye clinic in Maldonado',
  line: 'url',
  description: 'Speaker Five participated in the design, implementation, analysis and communication of observational studies and clinical trials, mainly in retinal diseases.',
}, {
  photo: 'images/speaker6.jpg',
  name: 'Speaker Six',
  job: 'Director of the Expert Course in Geriatric Optometry at UM',
  line: 'url',
  description: 'Speaker six is a Doctor in Vision Sciences from the European University of Madrid with a diploma in Optics from the Complutense University of Madrid.',
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
      boxes.className = 'mainContainer:active';
      speakerButton.style.order = 2;
      speakerButton2.style.display = 'flex';
      speakerButton2.style.order = 3;
      speakerButton.style.display = 'none';

    });

    buttonS.addEventListener('click', () => {
      const boxes2 = document.getElementById('mainContainer3');
      const boxes3 = document.getElementById('mainContainer4');
      const boxes4 = document.getElementById('mainContainer5');
      const boxes5 = document.getElementById('mainContainer6');

      boxes2.id = 'mainContainer3:active';
      boxes3.id = 'mainContainer4:active';
      boxes4.id = 'mainContainer5:active';
      boxes5.id = 'mainContainer6:active';
    });

    buttonS2.addEventListener('click', () => {
      const boxes2 = document.getElementById('mainContainer3:active');
      const boxes3 = document.getElementById('mainContainer4:active');
      const boxes4 = document.getElementById('mainContainer5:active');
      const boxes5 = document.getElementById('mainContainer6:active');

      boxes2.id = 'mainContainer3';
      boxes3.id = 'mainContainer4';
      boxes4.id = 'mainContainer5';
      boxes5.id = 'mainContainer6';
      buttonS.style.display = 'flex';
      buttonS2.style.display = 'none';
    });
  }

  if (i === 2) {
    mainDiv.className = 'mainDiv3';
    mainContainer.id = 'mainContainer3';
  } else if (i === 3) {
    mainDiv.id = 'mainDiv4';
    mainContainer.id = 'mainContainer4';
  } else if (i === 4) {
    mainDiv.className = 'mainDiv5';
    mainContainer.id = 'mainContainer5';
  } else if (i === 5) {
    mainDiv.className = 'mainDiv6';
    mainContainer.id = 'mainContainer6';
  }
}