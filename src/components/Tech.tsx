import { useContext } from 'react';
import { context } from '../App';
import { styles } from "../styles";


const Tech = () => {
    const { isLight } = useContext(context);

    return (
        <div id="skills" className={`mt-4 ${styles.paddingX} max-w-7xl mx-auto flex flex-col items-start justify-between`}>
            <h2 className={`${styles.sectionHeadText} ${isLight ? "text-black-100" : "text-white-100"}`}>Tech Stack.</h2>
            {/* <p className={`${styles.sectionSubText} m-10 ml-0`}>Technical Skiils</p>
            <div className='flex flex-row flex-wrap justify-center gap-10'>
                {languages.map((language) => (
                    <div className='w-28 h-28' key={language.name}>
                        <BallCanvas icon={language.icon} />
                    </div>
                ))}
            </div> */}
            <p className={`${styles.sectionSubText} ${isLight ? "text-black-100" : "text-white-100"} font-semibold mt-4`}>Technical Skiils</p>
            <div className='flex flex-row flex-wrap justify-center gap-10'>
                {/* <BallCanvas stack = {languages} /> */}
            </div>
            {/* <p className={`${styles.sectionSubText} m-10 ml-0`}>Technologies and Frameworks</p>
            <div className='flex flex-row flex-wrap justify-center gap-10'>
                {technologies.map((technology) => (
                    <div className='w-28 h-28' key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default Tech;