import { useContext, useState } from 'react';
import { styles } from "../styles";
import { context } from "../App";
import { websites } from '../constants';
import { dropdown, popout } from "../assets";

/**
 * Previews are build time screenshots, not live <iframe> embeds. Every host
 * linked here sends X-Frame-Options: SAMEORIGIN, so the original embeds
 * rendered as empty bordered boxes for all of them.
 */
const Websites = () => {
    const { isLight } = useContext(context);
    const [ active, setActive ] = useState<number>(0);

    const preview = (
        <a href={websites[active].link} target="_blank" rel="noreferrer"
            className={`block overflow-hidden rounded-xl border-2 ${isLight ? "border-black" : "border-white"} hover:opacity-90`}>
            <img
                src={websites[active].media}
                alt={`${websites[active].title} homepage`}
                className='w-full block'
            />
        </a>
    );

    return (
        <div id="websites" className="mt-4 max-w-7xl mx-auto flex flex-col items-center justify-center">
            <div className={`${styles.paddingX} w-full flex flex-col items-start justify-between`}>
                <p className={`${styles.sectionSubText} ${isLight ? "text-black-200" : "text-white-100" } mt-10 font-semibold`}>What I made</p>
                <h2 className={`${styles.sectionHeadText} ${isLight ? "text-black-100" : "text-white-100"} mb-16`}>Websites.</h2>
                <div className='flex justify-between items-start gap-10 w-full mb-10 md:p-4'>
                    <div className='w-full md:w-1/2 flex flex-col gap-4'>
                        {websites.map((website, index) => (
                            <div key={index} className={`p-6 rounded-xl border-2 ${isLight ? "border-black" : "border-white"} flex flex-col items-start justify-center ${active === index ? "" : "hover:cursor-pointer"} gap-4 w-full`} onClick={() => setActive(index)}>
                                <header className='flex justify-between items-center gap-4 w-full'>
                                    <div className='flex flex-col gap-1'>
                                        <h3 className={`${isLight ? "text-black-200" : "text-white-100" } text-[1.05rem] md:text-lg font-bold`}>{website.title}</h3>
                                        <p className={`${isLight ? "text-secondary-text-light" : "text-secondary-dark"} text-[11px] md:text-xs uppercase tracking-wider font-semibold`}>{website.context}</p>
                                    </div>
                                    <img src={dropdown} alt="expand" className={`shrink-0 w-8 h-8 md:w-10 md:h-10 ${isLight ? "" : "invert"} ${active === index ? "hidden" : ""}`} />
                                    <a href={website.link} target="_blank" rel="noreferrer"
                                        className={`shrink-0 flex items-center gap-2 ${active === index ? "" : "hidden"} ${isLight ? "text-black-200" : "text-white-100"} text-xs md:text-sm font-semibold hover:opacity-75`}
                                        onClick={(event) => event.stopPropagation()}>
                                        Visit site
                                        <img src={popout} alt="" className={`w-5 h-5 md:w-6 md:h-6 ${isLight ? "" : "invert"}`} />
                                    </a>
                                </header>
                                <p className={`${active === index ? '': 'hidden' } ${isLight ? "text-secondary-text-light" : "text-secondary-dark" } text-sm md:text-base leading-[28px]`}>{website.description}</p>
                                <div className={`${active === index ? '': 'hidden' } flex flex-wrap gap-2 md:gap-3 w-full justify-center md:justify-end`}>
                                    {website.stack.map((tech, techIndex) => (
                                        <img key={techIndex} src={tech} alt="" className='w-7 h-7 md:w-10 md:h-10' />
                                    ))}
                                </div>
                                {/* the preview lives inside the open card on mobile, beside the list on desktop */}
                                <div className={`${active === index ? '' : 'hidden'} md:hidden w-full mt-2`}>
                                    {preview}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='hidden md:block w-1/2 sticky top-28'>
                        {preview}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Websites;
