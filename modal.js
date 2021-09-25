const projectObj = {
  project1: {
    image: {
      imageUrl: './images/books2.png',
      altText: 'project image',
    },
    name: 'Book Store',
    title: 'Add and remove book from book store',
    description:
      "This project entails building a book Store app that users get to add and remove a book by book's name and the author and the information is stored and rendered from Local Storage.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    liveUrl: 'See Project',
    sourceUrl: 'https://julie-ify.github.io/Book-Store/',
    sourceCode: 'https://github.com/julie-ify/Book-Store',
  },

  project2: {
    image: {
      imageUrl: './images/modal-image2.png',
      altText: 'project image',
    },
    name: 'Todo App',
    title: 'Todo list',
    description:
      'This project entails building a user-friendly and responsive to-do app in which a user can add new tasks, check completed tasks, delete tasks, and remove completed tasks. This project saves users task in local Storage so that user can see all his tasks when he leaves the app and comes back. This project was built with JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'Babel'],
    liveUrl: 'See Project',
    sourceUrl: 'https://julie-ify.github.io/ToDo-List-App/',
    sourceCode: 'https://github.com/julie-ify/ToDo-List-App',
  },

  project3: {
    image: {
      imageUrl: './images/movie.png',
      altText: 'project image',
    },
    name: 'NETFLEX',
    title: 'Watch your favourite movie',
    description:
      'This project entails building a user-friendly and NETFLEX is a web application that fetches TV Shows from an external API - TV Maze API. Users can like and comment on a TV Show. The likes and comments features are all handled by API. Built with Javascript. to-do app in which a user can add new tasks, check completed tasks, delete tasks, and remove completed tasks. This project saves users task in local Storage so that user can see all his tasks when he leaves the app and comes back.',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveUrl: 'See Project',
    sourceUrl: 'https://bit.ly/3tmGmS2',
    sourceCode: 'https://github.com/julie-ify/js-capstone-netflex',
  },

  project4: {
    image: {
      imageUrl: './images/bootcamp.png',
      altText: 'project image',
    },
    name: 'Web Development Bootcamp',
    title: 'Best web development bootcamp 2021',
    description:
      "This is a capstone project for HTML & CSS module in Microverse. It's about a web development bootcamp which takes place every year at different locations and cities. Users can sign up to attend the event.",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveUrl: 'See Project',
    sourceUrl: 'https://julie-ify.github.io/HTML-Capstone-Project/',
    sourceCode: 'https://github.com/julie-ify/HTML-Capstone-Project',
  },

  project5: {
    image: {
      imageUrl: './images/modal-image5.png',
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
      imageUrl: './images/modal-image6.png',
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

const modalSection = document.querySelector('.modal-section');
const projectsBtn = [...document.querySelectorAll('.see-project-btn')];

function createModal(cardNumber) {
  const modalImgDiv = document.querySelector('.modal-content');
  modalImgDiv.innerHTML = `<div class="modal-div">
  <div class="times">&times;</div>
  </div>
  <img src="${projects[cardNumber].image.imageUrl}" alt="" class="imgry" />
  <div class="modal-title">
  <h2 class="about-heading modal-heading">${projects[cardNumber].name}</h2>
  </div>
  <div class="modal-paragraph">
  <h3 class="modal-p">${projects[cardNumber].title}</h3>
  </div>
  <div class="modal-paragraph">
  <p class="modal-p">${projects[cardNumber].description}</p>
  </div>
  <ul class="modal-list"></ul>
  <div class="btn">
  <a href="${projects[cardNumber].sourceUrl}" target="_blank" class="f-icon-1"
    >See Live <i class="fas fa-external-link-alt f-icon"></i
  ></a>
  <a href="${projects[cardNumber].sourceCode}" target="_blank" class="f-icon-2"
    >See Source <i class="fab fa-github f-icon f-icon-2"></i
  ></a>
  </div>`;

  const modallist = document.querySelector('.modal-list');
  for (let i = 0; i < projects[cardNumber].technologies.length; i += 1) {
    const list = document.createElement('li');
    list.textContent = projects[cardNumber].technologies[i];
    modallist.appendChild(list);
  }

  const times = document.querySelector('.times');
  times.addEventListener('click', () => {
    modalSection.style.display = 'none';
  });
}

for (let i = 0; i < projectsBtn.length; i += 1) {
  projectsBtn[i].addEventListener('click', () => {
    modalSection.style.display = 'block';
    createModal(i);
  });
}
