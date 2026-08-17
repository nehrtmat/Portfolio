import { useContext } from 'react';
import { styles } from '../styles';
import { context } from '../App';
import { aiProjects } from '../constants';
import { popout } from '../assets';

interface AIProject {
    title: string,
    status: string,
    summary: string,
    highlights: string[],
    stack: string[],
    link?: string,
    linkLabel?: string,
}

// A status only reads as "shipped" when it says so. Anything else gets the
// quieter outline treatment so design work is never mistaken for a live system.
const isLive = (status: string) =>
    status.startsWith('Running') || status.startsWith('In production');

const AICard = ({ project, featured }: { project: AIProject, featured: boolean }) => {
    const { isLight } = useContext(context);
    const live = isLive(project.status);

    return (
        <article className={`rounded-2xl p-6 md:p-8 w-full ${isLight ? "border-black" : "border-white"} ${featured ? "border-4" : "border-2"}`}>
            <header className='flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6'>
                <h3 className={`${isLight ? "text-black-200" : "text-white-100"} font-bold ${featured ? "text-[1.25rem] md:text-2xl" : "text-[1.1rem] md:text-xl"}`}>
                    {project.title}
                </h3>
                <span className={`self-start sm:self-auto shrink-0 text-[11px] md:text-xs uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full whitespace-nowrap ${
                    live
                        ? isLight ? "bg-[#2548e3] text-white" : "bg-white-100 text-black-200"
                        : isLight ? "border-2 border-[#2548e3] text-[#2548e3]" : "border-2 border-secondary-dark text-secondary-dark"
                }`}>
                    {project.status}
                </span>
            </header>

            <p className={`${isLight ? "text-secondary-text-light" : "text-secondary-dark"} mt-5 text-sm md:text-base leading-[28px] max-w-4xl`}>
                {project.summary}
            </p>

            <ul className='mt-6 grid md:grid-cols-2 gap-x-10 gap-y-3'>
                {project.highlights.map((highlight, index) => (
                    <li key={index} className='flex gap-3 items-start'>
                        <span className={`mt-[9px] shrink-0 w-2 h-2 rotate-45 ${isLight ? "bg-[#2548e3]" : "bg-secondary-dark"}`} />
                        <span className={`${isLight ? "text-secondary-text-light" : "text-secondary-dark"} text-sm md:text-[15px] leading-[26px]`}>
                            {highlight}
                        </span>
                    </li>
                ))}
            </ul>

            <div className='mt-7 flex flex-wrap items-center justify-between gap-4'>
                <div className='flex flex-wrap gap-2'>
                    {project.stack.map((tech, index) => (
                        <span key={index} className={`text-[11px] md:text-xs font-medium px-3 py-1.5 rounded-lg ${isLight ? "bg-black-200 text-white-100" : "bg-white-100 text-black-200"}`}>
                            {tech}
                        </span>
                    ))}
                </div>
                {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer"
                        className={`flex items-center gap-2 shrink-0 text-xs md:text-sm font-semibold hover:opacity-75 ${isLight ? "text-black-200" : "text-white-100"}`}>
                        {project.linkLabel || 'Visit'}
                        <img src={popout} alt="" className={`w-5 h-5 ${isLight ? "" : "invert"}`} />
                    </a>
                )}
            </div>
        </article>
    )
}

const AIWork = () => {
    const { isLight } = useContext(context);

    return (
        <div id="ai" className={`mt-4 ${styles.paddingX} max-w-7xl mx-auto flex flex-col items-start justify-between`}>
            <p className={`${styles.sectionSubText} ${isLight ? "text-black-200" : "text-white-100"} mt-10 font-semibold`}>What I build</p>
            <h2 className={`${styles.sectionHeadText} ${isLight ? "text-black-100" : "text-white-100"}`}>AI Engineering.</h2>
            <p className={`${isLight ? "text-secondary-text-light" : "text-secondary-dark"} mt-6 mb-12 text-[17px] max-w-4xl leading-[30px]`}>
                Agents, automations, and pipelines I designed and run. Each one replaced something I used to
                do by hand, which is the only test I trust for whether an automation was worth building.
            </p>

            <div className='flex flex-col gap-6 md:gap-8 w-full mb-20'>
                {aiProjects.map((project, index) => (
                    <AICard key={index} project={project} featured={index === 0} />
                ))}
            </div>
        </div>
    )
}

export default AIWork;
