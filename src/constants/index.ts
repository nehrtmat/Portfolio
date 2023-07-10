import { aws, backend, cp, docker, frontend, redis } from '../assets';
import { springboot, python, cpp, c, java, sql, django, css, git, html, javascript, mongodb, nodejs, reactjs, tailwind, typescript, } from '../assets';


export const skills = [
    {title: "Competitive Programmer", icon: cp}, 
    {title: "FrontEnd Developer", icon: frontend}, 
    {title: "Backend Developer", icon: backend}, 
    {title: "AWS Solutions Architect", icon: aws}
];

export const frameworks = [
    {title: 'React', icon: reactjs, invert: false }, 
    {title: 'Node.js', icon: nodejs, invert: true }, 
    {title: 'TypeScript', icon: typescript, invert: false }, 
    {title: 'Tailwind', icon: tailwind, invert: false }, 
    {title: 'Django', icon: django, invert: true }, 
    {title: 'Docker', icon: docker, invert: false }, 
    {title: 'Spring Boot', icon: springboot, invert: false }, 
    {title: 'Git', icon: git, invert: false }
]

export const languages = [
    {title: 'Python', icon: python, invert: false }, 
    {title: 'C++', icon: cpp, invert: false }, 
    {title: 'C', icon: c, invert: false }, 
    {title: 'Java', icon: java, invert: false }, 
    {title: 'HTML', icon: html, invert: false }, 
    {title: 'CSS', icon: css, invert: false }, 
    {title: 'Javascript', icon: javascript, invert: false }, 
    {title: 'SQL', icon: sql, invert: true }, 
    {title: 'MongoDB', icon: mongodb, invert: false },
    {title: 'Redis', icon: redis, invert: false }
];

export const projects = [
    {
        title: 'VIT Grievance Portal', 
        description: 'A website designed to give students a platform to raise their concerns, problems and doubts to the college administration and authorities. This includes separate pages for students, teachers and admins.', 
        stack: [reactjs, tailwind, typescript, nodejs, mongodb, redis],
        link: 'https://vitb-grievances.aayush65.com',
        source: "https://github.com/Aayush65/Grievance-Portal"
    },
    {
        title: 'Flip Game', 
        description: 'A Memory based Game made up of fliped tiles which has some image on their rear side. One has to match cards bearing identical images with least amount of flips to win the game.', 
        stack: [reactjs, tailwind, typescript, nodejs, mongodb],
        link: 'https://flipgame.aayush65.com',
        source: "https://github.com/Aayush65/flipgame"
    },
    {
        title: 'Wordle2', 
        description: "A game inspired by the NYT's Wordle Game",
        stack: [reactjs, tailwind, typescript],
        link: 'https://wordle2.aayush65.com',
        source: "https://github.com/Aayush65/Wordle2"
    },
    {
        title: 'Sudoku', 
        description: 'A Sudoku Website which can generate all levels of unfilled sudokus to play with alongwith the ability to complete any possible unfilled sudoku. It also helps the player along the way by highlighting possible conflicts while cell filling.', 
        stack: [reactjs, tailwind, typescript],
        link: 'https://sudoku.aayush65.com',
        source: "https://github.com/Aayush65/sudoku"
    },
    {
        title: 'Portfolio', 
        description: 'My humble portfolio website', 
        stack: [reactjs, tailwind, typescript],
        link: 'https://aayush65.com',
        source: "https://github.com/Aayush65/Portfolio"
    },
]