import { aws, backend, cp, frontend } from '../assets';
import { springboot, python, cpp, c, java, sql, django, css, git, html, javascript, mongodb, nodejs, reactjs, redux, tailwind, typescript, } from '../assets';


export const skills = [
    {title: "Competitive Programmer", icon: cp}, 
    {title: "FrontEnd Developer", icon: frontend}, 
    {title: "Backend Developer", icon: backend}, 
    {title: "AWS Solutions Architect", icon: aws}
];

export const frameworks = [
    {title: 'React', icon: reactjs }, 
    {title: 'Node.js', icon: nodejs }, 
    {title: 'TypeScript', icon: typescript }, 
    {title: 'Tailwind', icon: tailwind }, 
    {title: 'Django', icon: django }, 
    {title: 'Redux', icon: redux }, 
    {title: 'Spring Boot', icon: springboot }, 
    {title: 'Git', icon: git }
]

export const languages = [
    {title: 'Python', icon: python }, 
    {title: 'C++', icon: cpp }, 
    {title: 'C', icon: c }, 
    {title: 'Java', icon: java }, 
    {title: 'HTML', icon: html }, 
    {title: 'CSS', icon: css }, 
    {title: 'Javascript', icon: javascript }, 
    {title: 'SQL', icon: sql }, 
    {title: 'MongoDB', icon: mongodb }
];

export const projects = [
    {
        title: 'Portfolio', 
        description: 'My humble portfolio website', 
        link: 'https://aayush65.com',
        source: "https://github.com/Aayush65/Portfolio"
    },
    {
        title: 'Wordle2', 
        description: "A game inspired by the NYT's Wordle Game",
        link: 'https://wordle2.aayush65.com',
        source: "https://github.com/Aayush65/Wordle2"
    },
    {
        title: 'Flip Game', 
        description: 'A Memory based Game made up of fliped tiles which has some image on their rear side. One has to match cards bearing identical images with least amount of flips to win the game.', 
        link: 'https://flipgame.aayush65.com',
        source: "https://github.com/Aayush65/flipgame"
    },
    {
        title: 'Sudoku', 
        description: 'A Sudoku Website which can generate all levels of unfilled sudokus to play with alongwith the ability to complete any possible unfilled sudoku. It also helps the player along the way by highlighting possible conflicts while cell filling.', 
        link: 'https://sudoku.aayush65.com',
        source: "https://github.com/Aayush65/sudoku"
    },
]