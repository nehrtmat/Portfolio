import { useContext, useState } from 'react';
import { styles } from "../styles";
import { context } from "../App";
import { projects } from '../constants';
import { dropdown } from "../assets";

const Projects = () => {
    const { isLight } = useContext(context);
    const [ active, setActive ] = useState<number>(0); 

    return (
        <div id="projects" className="mt-4">
            <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col items-start justify-between`}>
                <p className={`${styles.sectionSubText} ${isLight ? "text-black-200" : "text-white-100" } mt-10 font-semibold`}>What I made</p><h2 className={`${styles.sectionHeadText} ${isLight ? "text-black-100" : "text-white-100"} mb-16`}>Projects.</h2>
                <div className='flex justify-between items-center gap-10 w-full'>
                    <div className={`p-4 ${isLight ? "border-primary-dark" : "border-primary-light"} w-full md:w-1/2`}>
                        {projects.map((project, index) => (
                            <div key={index} className={`p-4 rounded-xl border-2 ${isLight ? "border-primary-dark" : "border-primary-light"} flex flex-col items-start justify-center cursor-pointer`} onClick={() => setActive(index)}>
                                <div className='flex justify-between items-center w-full'>
                                    <h3 className={`${styles.sectionSubText} ${isLight ? "text-black-200" : "text-white-100" }`}>{project.title}</h3>
                                    <img src={dropdown} alt="dropdown" className={`w-10 h-10 ${isLight ? "" : "filter invert"} ${active === index ? "hidden" : ""}`} />
                                </div>
                                <p className={`${active === index ? '': 'hidden' } ${isLight ? "text-secondary-text-light" : "text-secondary-dark" } text-[17px] max-w-1/2 leading-[30px] md:ml-3`}>{project.description}</p>
                            </div>
                        ))}
                    </div>
                    <iframe src={projects[active].link} className={`hidden sm:block w-[400px] h-[600px] border-2 ${isLight ? "border-primary-dark" : "border-primary-light"} rounded-xl mb-5`} > Sorry Error!!</iframe>
                </div>
            </div>
            <iframe src={projects[active].link} className={`my-10 md:hidden w-screen h-[80vh] border-2 ${isLight ? "border-primary-dark" : "border-primary-light"} rounded-xl mb-5`} > Sorry Error!!</iframe>
        </div>
    )
}

export default Projects;