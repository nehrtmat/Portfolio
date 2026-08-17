import { useContext, useEffect } from 'react';
import { Navbar } from '.';
import { context } from '../App';
import { download } from '../assets';
import { Link } from 'react-router-dom';
import { resumeLink, resumeDownloadLink } from '../constants';

const Resume = () => {
    const { isLight } = useContext(context);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    // Downloading used to go through fetch(resumeLink, { mode: 'no-cors' }),
    // which resolves to an opaque response, so resp.blob() handed back an empty
    // file every time. Drive's export endpoint works as an ordinary link.
    const buttonStyles = isLight
        ? "bg-black-200 text-white-100 hover:text-secondary-dark"
        : "bg-white-100 text-black-200 hover:text-secondary-light";

    return (
        <div className={`${ isLight ? "bg-hero-pattern-light" : "bg-hero-pattern-dark" } bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center min-h-screen md:h-full`}>
            <Navbar />
            <div className='relative mt-24'>
                <iframe className='w-[355px] h-[500px] md:w-[826px] md:h-[1160px] rounded-xl' src={resumeLink} title="Matthew Nehrt resume"></iframe>
                <a href={resumeDownloadLink} download="Matthew Nehrt - Resume.pdf" title="Download resume" className='absolute top-2 left-2'>
                    <img src={download} alt="download resume" className="w-10 h-10 md:w-12 md:h-12 bg-[#404040] hover:cursor-pointer hover:bg-[#474847] text-xs md:text-lg font-semibold p-3 rounded-xl" />
                </a>
            </div>
            <div className='w-[355px] md:w-[826px] flex justify-evenly items-center'>
                <Link to="/" className={`${buttonStyles} my-5 text-xs md:text-lg font-semibold p-3 rounded-xl`}>Back</Link>
                {/* iOS Safari will not paint a PDF inside an iframe, so these two
				    are the real path to the file on mobile. */}
                <a href={resumeLink} target="_blank" rel="noreferrer" className={`${buttonStyles} my-5 text-xs md:text-lg font-semibold p-3 rounded-xl`}>Open PDF</a>
                <a href={resumeDownloadLink} download="Matthew Nehrt - Resume.pdf" className={`${buttonStyles} my-5 text-xs md:text-lg font-semibold p-3 rounded-xl`}>Download</a>
            </div>
        </div>
    )
}

export default Resume
