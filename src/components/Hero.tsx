import { useContext } from 'react';
import { styles } from '../styles';
import { context } from '../App';
import { comp } from '../assets';
import './blinkingCursor.css';

const Hero = () => {
    const { isLight } = useContext(context);

    return (
        <section className='relative w-full h-screen mx-auto'>
			<div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start justify-between`}>
				<div className='flex flex-col md:flex-row justify-between items-center mt-5 gap-3'>
					<div>
						<h1 className={`${styles.heroHeadText} ${isLight ? "text-black-100" : "text-white-100"}`}>Hi, I am <span className="text-[#2548e3]">Aayush.</span>
						<span className={`animate-blink ${isLight ? "text-gray-600" : "text-white-100"}`}>|</span></h1>
						<p className={`${styles.heroSubText} ${isLight ? "text-black-200" : "text-white-100"} mt-2`}>I am a full stack developer and a LeetCode enthusiast.</p>
					</div>
					<img src={comp} alt="Working Man" />
				</div>
			</div>
		</section>
    )
}

export default Hero;