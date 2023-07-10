import { useContext, useState } from 'react';
import { styles } from "../styles";
import { context } from "../App";
import { projects } from '../constants';
import { dropdown, github, popout } from "../assets";

const Projects = () => {
    const { isLight } = useContext(context);
    const [ active, setActive ] = useState<number>(0); 

    return (
        <div id="projects" className="mt-4">
            <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col items-start justify-between`}>
                <p className={`${styles.sectionSubText} ${isLight ? "text-black-200" : "text-white-100" } mt-10 font-semibold`}>What I made</p>
                <h2 className={`${styles.sectionHeadText} ${isLight ? "text-black-100" : "text-white-100"} mb-16`}>Projects.</h2>
                <div className='flex justify-between items-center gap-10 w-full'>
                    <div className={`p-4 ${isLight ? "border-black" : "border-white"} w-full md:w-1/2`}>
                        {projects.map((project, index) => (
                            <div key={index} className={`p-4 rounded-xl border-2 ${isLight ? "border-black" : "border-white"} flex flex-col items-start justify-center ${active === index ? "" : "hover:cursor-pointer"} gap-6 p-6 w-full`} onClick={() => setActive(index)}>
                                <div className='flex justify-between items-center w-full'>
                                    <h3 className={`${styles.sectionSubText} ${isLight ? "text-black-200" : "text-white-100" } text-lg md:text-xl font-semibold`}>{project.title}</h3>
                                    <img src={dropdown} alt="dropdown" className={`w-8 h-8 md:w-10 md:h-10 ${isLight ? "" : "invert"} ${active === index ? "hidden" : ""}`} />
                                    <div className={`flex justify-end items-center gap-3 md:gap-5 ${isLight ? "" : "invert"} ${active === index ? "" : "hidden"}`}>
                                        <a href={project.link} target="_blank" className={``} >
                                            <img src={popout} alt="websiteLink" className={`w-6 h-6 md:w-8 md:h-8 hover:scale-110 active:scale-[1.2]`} />
                                        </a>
                                        <a href={project.source} target="_blank" className={``} >
                                            <img src={github} alt="githubLink" className={`w-6 h-6 md:w-8 md:h-8 hover:scale-110`} />
                                        </a>
                                    </div>
                                </div>
                                <p className={`${active === index ? '': 'hidden' } ${isLight ? "text-secondary-text-light" : "text-secondary-dark" } text-sm md:text-base max-w-1/2 leading-[30px] md:ml-3`}>{project.description}</p>
                                <div className={`${active === index ? '': 'hidden' } flex gap-2 md:gap-3 w-full justify-center md:justify-end`}>
                                    {project.stack.map((tech, index) => (
                                        <img key={index} src={tech} className='w-7 h-7 md:w-10 md:h-10' />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <iframe src={projects[active].link} className={`hidden sm:block w-[400px] h-[600px] border-2 ${isLight ? "border-black" : "border-white"} rounded-xl mb-5`} >Sorry Error!!</iframe>
                </div>
            </div>
            <iframe src={projects[active].link} className={`my-10 md:hidden w-screen h-[600px] border-2 ${isLight ? "border-black" : "border-white"} rounded-xl mb-5 landscape:hidden`} >Sorry Error!!</iframe>
        </div>
    )
}

export default Projects;