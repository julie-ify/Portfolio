const projectObj = {
  project1: {
    image: {
      imageUrl: './images/modal-image.png',
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
      imageUrl: './images/modal-image.png',
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
      imageUrl: './images/modal-image.png',
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
      imageUrl: './images/modal-image.png',
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
      imageUrl: './images/modal-image.png',
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
      imageUrl: './images/modal-image.png',
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

const container = document.querySelector('.grid-container');

function createCard(card, index) {
  let createCardHTML = 
    `<li class="card">
      <div class="card-head">
        <img src="${card.image.imageUrl}" alt="${card.image.altText}">
      </div>
      <div class="card-body">
        <h2 class="md-text">${card.name}</h2>
        <ul class="work-tools">`
    for (let i = 0; i < card.technologies.length; i += 1) {
      createCardHTML += `<li class="work-tool">${card.technologies[i]}</li>`;
    }    
    createCardHTML +=    `</ul>
        <button class="see-project-btn" type="button">${card.liveUrl}</button>
      </div>
      </li>` ;

      return createCardHTML;
}

function createModal(card, index) {
  let createModalHTML = 
  `<section class="modal-section" id="modal">
    <div class="modal-container">
      <div class="modal-content">
        <div class="times">&times;</div>
        <div class="modal-image">
          <img src="${card.image.imageUrl}" alt="${card.image.altText}"/>
        </div>
        <div class="modal-title">
          <h2 class="modal-title about-heading">${card.title}</h2>
        </div>
        <ul class="modal-list">`;
    for (let i = 0; i < card.technologies.length; i += 1) {
        createModalHTML += `<li>${card.technologies[i]}</li>`;
    }

      createModalHTML += 
        `</ul>
        <div class="modal-paragraph">
          <p>${card.description}</p>
        </div>
        <div class="btn">
          <a href="https://faizi2500.github.io/Portfolio-Mobile-Skeleton/">
          ${card.sourceUrl} <i class="fas fa-external-link-alt f-icon"></i>
          </a>
          <a href="https://github.com/faizi2500/Portfolio-Mobile-Skeleton">
          ${card.sourceCode} <i class="fab fa-github f-icon"></i>
          </a>
        </div>
      </div>
    </div>`;

    return createModalHTML;
}

function createDynamicCard() {
  // const projNames = Object.keys(projects);
  // const projLength = Object.keys(projects).length;
  for (let i = 0; i< Object.keys(projectObj).length; i++) {
    container.innerHTML += createCard(projectObj[Object.keys(projectObj)[i]], i);
  }
  
  for (let j=0; j < Object.keys(projectObj).length; i++) {
    container.innerHTML += createModal(projectObj[Object.keys(projectObj)[i]], i);
  }
}

container.onload = createDynamicCard();


