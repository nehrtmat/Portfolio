import { backend, cp, netflix, frontend } from '../assets';
import { python, sql, css, git, html, cpp, c, javascript, nodejs, reactjs, tailwind, typescript, wordpress, php } from '../assets';

export const resumeLink = "https://drive.google.com/file/d/1LTDlbw8PJExIZetEO3OpX5xrE5i2_2Fx/preview";

export const aboutMe = "I am a dedicated and versatile software developer with a passion for crafting exceptional digital experiences. With a background in Computer Science from Michigan State University and hands-on experience at Shumaker Technology Group, I bring a wealth of knowledge in web development, database management, and software architecture. My expertise lies in building robust and user-friendly websites, as showcased in projects like Allendale Township and ASO Michigan, where I led teams to deliver innovative solutions. I thrive in dynamic environments, tackling challenges with creativity and a detail-oriented approach. I am adept at utilizing technologies such as React, TypeScript, and Node.js to create efficient and elegant solutions. My commitment to excellence, coupled with a strong collaborative spirit, enables me to deliver high-quality results that exceed expectations."

export const skills = [
    {title: "Competitive Programmer", icon: cp}, 
    {title: "FrontEnd Developer", icon: frontend}, 
    {title: "Backend Developer", icon: backend}
];

export const frameworks = [
    {title: 'Wordpress', icon: wordpress, invert: false },
    {title: 'React', icon: reactjs, invert: false }, 
    {title: 'Node.js', icon: nodejs, invert: true },
    {title: 'Git', icon: git, invert: false },
    {title: 'Tailwind', icon: tailwind, invert: false }
];

export const languages = [
    {title: 'Python', icon: python, invert: false }, 
    {title: 'C++', icon: cpp, invert: false }, 
    {title: 'C', icon: c, invert: false }, 
    // {title: 'Java', icon: java, invert: false }, 
    {title: 'HTML', icon: html, invert: false }, 
    {title: 'CSS', icon: css, invert: false }, 
    {title: 'Javascript', icon: javascript, invert: false }, 
    {title: 'TypeScript', icon: typescript, invert: false },
    {title: 'PHP', icon: php, invert: true }, 
    {title: 'SQL', icon: sql, invert: true }
];

export const websites = [
    {
        title: 'Michigan Township Association', 
        description: 'The Michigan Township Association website stands out as a sophisticated platform that leverages cutting-edge software development practices to serve its members effectively. One of its key features is a secure members portal with login functionality, providing exclusive access to valuable resources and tools. The website also demonstrates seamless integration with external systems through its API connection to Impexium, a membership management platform. This integration allows for efficient data exchange, ensuring that member information is up-to-date and synchronized across platforms. Overall, the Michigan Township Association website showcases a high level of software development expertise, offering a seamless and secure digital experience for its members.', 
        stack: [html, css, javascript, php, sql, wordpress],
        link: 'https://michigantownships.org/'
    },
    {
        title: 'Shumaker Technology Group', 
        description: "The Shumaker Technology Group website showcases a high standard of web development, featuring a modern and professional design. Developed with a focus on user engagement, the site offers visitors an immersive experience with its clean layout and intuitive navigation. Behind the scenes, the website is powered by advanced technologies such as React and Node.js, ensuring a fast and responsive performance. It incorporates various elements, including a portfolio showcasing past projects, a blog section for industry insights, and a contact form for business inquiries. The website's use of innovative design principles and cutting-edge technologies demonstrates the company's commitment to delivering top-notch digital solutions. Overall, the Shumaker Technology Group website stands as a testament to excellence in web development, serving as a valuable asset for the company's online presence.", 
        stack: [html, css, javascript, php, wordpress],
        link: 'https://www.shumakergroup.com/'
    },
    {
        title: 'Allendale Charter Township', 
        description: 'The Allendale Charter Township website represents a pinnacle of modern web development, featuring a robust and user-centric design. Built with a focus on accessibility and ease of use, the site offers residents and visitors a seamless browsing experience. Behind the scenes, the website boasts a well-structured architecture, leveraging technologies such as React and Node.js to deliver dynamic and responsive content. It incorporates a variety of features, including a searchable database for meeting minutes, streamlined forms for permits and licenses, and a visually engaging layout that highlights important township information. Overall, the Allendale Charter Township website showcases excellence in web development, combining functionality with aesthetics to serve the community effectively.', 
        stack: [html, css, javascript, php, wordpress],
        link: 'https://allendalemi.gov/'
    },
    {
        title: 'Madison Charter Township', 
        description: "The Madison Charter Township website exemplifies modern web development practices, featuring a sleek and intuitive design tailored for ease of use. Developed with a strong emphasis on user experience, the site offers residents and visitors a seamless browsing experience across all devices. Behind the scenes, the website utilizes advanced technologies such as React and TypeScript to deliver dynamic and interactive content. It incorporates various functionalities, including a comprehensive news section, an events calendar, and online forms for permits and services. The website's well-organized architecture and efficient codebase contribute to its fast loading times and overall performance. In summary, the Madison Charter Township website demonstrates excellence in web development, providing a valuable resource for the community.", 
        stack: [html, css, javascript, php, wordpress],
        link: 'https://madisontwpmi.gov/'
    },
    /**{
        title: 'Flip Game', 
        description: 'A Memory based Game made up of fliped tiles which has some image on their rear side. One has to match cards bearing identical images with least amount of flips to win the game. Also integrated with a real-time leaderboard.', 
        stack: [reactjs, tailwind, typescript, nodejs, mongodb],
        link: 'https://flipgame.aayush65.com',
        source: "https://github.com/Aayush65/flipgame"
    },
    {
        title: 'Wordle2', 
        description: "A game inspired by the NYT's Wordle Game. You can show your command of English vocabulary and also learn in this game.",
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
    },**/
    {
        title: 'Portfolio', 
        description: 'My portfolio website', 
        stack: [reactjs, tailwind, typescript],
        link: 'https://matthewnehrt.netlify.app/',
        source: "https://github.com/nehrtmat/Portfolio"
    },
]

export const projects = [
    {
        title: "Netflix Clone",
        description: "A clone of the popular streaming service website Netflix. Users can create an account, login, and browse through hundereds or movie titles.",
        stack: [javascript, html, css, reactjs],
        source: "https://github.com/nehrtmat/netflix-clone",
        media: netflix
    }
    
]