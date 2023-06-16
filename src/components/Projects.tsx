import { useContext } from 'react';
import { styles } from "../styles";
import { context } from "../App";

const Projects = () => {
    const { isLight } = useContext(context);

    return (
        <div id="projects" className={`mt-4 ${styles.paddingX} max-w-7xl mx-auto flex flex-col items-start justify-between`}>
            <p className={`${styles.sectionSubText} ${isLight ? "text-black-200" : "text-white-100" } mt-10 font-semibold`}>What I made</p><h2 className={`${styles.sectionHeadText} ${isLight ? "text-black-100" : "text-white-100"}`}>Projects.</h2>
            
        </div>
    )
}

export default Projects;