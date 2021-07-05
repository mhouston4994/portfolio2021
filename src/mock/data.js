import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Matthew Houston | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Full Stack MERN Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Matthew Houston',
  subtitle: 'Full Stack MERN Developer',
  cta: 'Learn More',
  cta2: 'Resume',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.JPEG',
  paragraphOne: `Hi, my name is Matthew Houston. I'm the lead full stack MERN developer for a fiduciary processing company. I specialize in building single page responsive web apps, reading/parsing data sheets, and data manipulation. I currently have 2 years of professional experience, with 4 years of total experience. Check out some of the projects below, most of the projects I work on are require NDA's, so I cannot post about those. If you'd like something built, please feel free to reach out below.`,
  paragraphTwo:
    'Skilled using technologies such as: Html, css, javascript, React, Redux, Git, Azure portal/Azure Devops, MongoDB, Node/Npm, MySQL, CORS, encryption/storing PII with low risk, etc. As well as utilizing best practices such as REST APIs, AGILE, and a heightened sense of Big-O-Notation with complex algorithms.',
  paragraphThree: '',
  resume:
    'https://docs.google.com/document/d/1trx0kTouKiix30T16yhkjGqjpFiOd1XH9RJ6LIvQwKg/edit?usp=sharing', // if no link, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'proshop-1080.jpg',
    title: 'ProShop',
    info: 'Ecommerce demo app, still in development',
    info2: '',
    url: '',
    repo: 'https://github.com/mhouston4994/proshop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'moviefight-1080.jpg',
    title: 'Movie Fight',
    info: 'Ajax app that utilizes OMDb API to fetch, display, and compare 2 movies',
    info2: '',
    url: '',
    repo: 'https://github.com/mhouston4994/moviefight', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lightsout-1080.jpg',
    title: 'Lights Out',
    info: 'Lights out arcade game using react',
    info2: '',
    url: '',
    repo: 'https://github.com/mhouston4994/lightsoutgame', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'yelpcamp-1080.jpg',
    title: 'Yelpcamp',
    info: 'Full stack app that utilizes MongoDB, Express, Node, Bootstrap. Fully operational web-app.',
    info2: '',
    url: '',
    repo: 'https://github.com/mhouston4994/yelpcamp', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mhouston4994',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/pardition_/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/matthew-houston-a0461418b/',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:mhouston4994@gmail.com',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
