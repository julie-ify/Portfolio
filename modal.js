const projectObj = {
  project1: {
    image: {
      imageUrl: './images/modal-image',
      altText: 'project image',
    },
    name: 'Multi-Post StoriesGain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveUrl: 'See Project',
    sourceUrl: 'https://julie-ify.github.io/Portfolio-Mobile-version/',
    sourceCode: 'https://github.com/julie-ify/Portfolio-Mobile-version',
  },

  project2: {
    image: {
      imageUrl: './images/modal-image',
      altText: 'project image',
    },
    name: 'Multi-Post StoriesGain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveUrl: 'See Project',
    sourceUrl: 'https://julie-ify.github.io/Portfolio-Mobile-version/',
    sourceCode: 'https://github.com/julie-ify/Portfolio-Mobile-version',
  },

  project3: {
    image: {
      imageUrl: './images/modal-image',
      altText: 'project image',
    },
    name: 'Multi-Post StoriesGain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveUrl: 'See Project',
    sourceUrl: 'https://julie-ify.github.io/Portfolio-Mobile-version/',
    sourceCode: 'https://github.com/julie-ify/Portfolio-Mobile-version',
  },

  project4: {
    image: {
      imageUrl: './images/modal-image',
      altText: 'project image',
    },
    name: 'Multi-Post StoriesGain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveUrl: 'See Project',
    sourceUrl: 'https://julie-ify.github.io/Portfolio-Mobile-version/',
    sourceCode: 'https://github.com/julie-ify/Portfolio-Mobile-version',
  },

  project5: {
    image: {
      imageUrl: './images/modal-image',
      altText: 'project image',
    },
    name: 'Multi-Post StoriesGain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveUrl: 'See Project',
    sourceUrl: 'https://julie-ify.github.io/Portfolio-Mobile-version/',
    sourceCode: 'https://github.com/julie-ify/Portfolio-Mobile-version',
  },
  project6: {
    image: {
      imageUrl: './images/modal-image',
      altText: 'project image',
    },
    name: 'Multi-Post StoriesGain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveUrl: 'See Project',
    sourceUrl: 'https://julie-ify.github.io/Portfolio-Mobile-version/',
    sourceCode: 'https://github.com/julie-ify/Portfolio-Mobile-version',
  },
};

const projects = [
  projectObj.project1,
  projectObj.project2,
  projectObj.project3,
  projectObj.project4,
  projectObj.project5,
  projectObj.project6,
];

function createModal(cardNumber) {
  const modalCard = document.querySelector('#modal');
  modalCard.classList.toggle('invisible');
  const modaltitle = document.querySelector('.modal-heading');
  const modallist = document.querySelector('.modal-list');
  modallist.innerHTML = '';
  const modalImg = document.querySelector('.img');
  const modalDesc = document.querySelector('.modal-p');
  const buttonLive = document.querySelector('.f-icon-1');

  modaltitle.innerHTML = projects[cardNumber].title;

  for (let i = 0; i < projects[cardNumber].technologies.length; i += 1) {
    const list = document.createElement('li');
    list.textContent = projects[cardNumber].technologies[i];
    modallist.appendChild(list);
  }
  buttonLive.setAttribute(
    'onclick',
    `windows.open('${projects[cardNumber].sourceUrl}', '_blank');`
  );
  buttonLive.setAttribute(
    'onclick',
    `windows.open('${projects[cardNumber].sourceUrl}', '_blank');`
  );
  modalDesc.innerHTML = projects[cardNumber].description;

  modalImg.setAttribute(
    'src',
    `${projects[cardNumber].image.imageUrl + (cardNumber + 1)}.png`
  );
}

function toggle() {
  const card = document.querySelector('#modal');
  card.classList.toggle('invisible');
}

createModal(1);
toggle();
