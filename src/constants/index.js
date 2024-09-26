import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  nextjs,
  react,
  redux,
  sass,
  tailwindcss,
  AIrobot,
  typescript,
  smartphone,
  pizza,
  popcorn,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },

  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  //   {
  //     imageUrl: mongodb,
  //     name: "MongoDB",
  //     type: "Database",
  //   },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },

  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: smartphone,
    theme: "btn-back-red",
    name: "Apple Iphone website clone",
    description:
      "Developed a clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.",
    link: "https://pavaleanu-iphone.netlify.app/",
    github: "https://github.com/ciprianpavaleanu/applewebsite/tree/master",
  },
  {
    iconUrl: pizza,
    theme: "btn-back-green",
    name: "Fast React Pizza",
    description:
      "Fast React Pizza Co. is a Redux project where people can order pizza without authentication. I created this app while learning about Redux. For this app i used technologies like React, Redux, Tailwind CSS or React-router",
    link: "https://pizza-app-react-pavaleanu.netlify.app/",
    github: "https://github.com/ciprianpavaleanu/Pizza-App",
  },
  {
    iconUrl: AIrobot,
    theme: "btn-back-blue",
    name: "Presentational website of AI Company",
    description:
      "Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    link: "https://brainwaveapp-pavaleanu.netlify.app/",
    github: "https://github.com/ciprianpavaleanu/brainwave/tree/master",
  },
  {
    iconUrl: popcorn,
    theme: "btn-back-pink",
    name: "Movie search app",
    description:
      "FilmoSphere is a react application that provides users with a way to explore movies, rate them, and manage their watched movies list. By leveraging the OMDB API (Open Movie Database), the app gains access to an extensive movie database, allowing users to quickly and easily find movie information, including genre, cast, director, ratings, and much more. ",
    link: "https://filmospherev2.netlify.app",
    github: "https://github.com/ciprianpavaleanu/filmospherev2",
  },
];
