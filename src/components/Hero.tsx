import { useContext } from 'react';
import { styles } from '../styles';
import { context } from '../App';

const Hero = () => {
    const { isLight } = useContext(context);

    return (
        <section className='relative w-full h-screen mx-auto'>
			<div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className='w-5 h-5 rounded-full bg-[#2548e3] text-[#494e53]'/>
					<div className='w-1 sm:h-80 h-40 blue-gradient'/>
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} ${isLight ? "text-black-100" : "text-white-100"}`}>Hi, I am <span className="text-[#2548e3]">Aayush</span></h1>
					<p className={`${styles.heroSubText} ${isLight ? "text-black-200" : "text-white-100"} mt-2`}>I am a full stack developer and a LeetCode enthusiast.</p>
				</div>
			</div>
		</section>
    )
}

export default Hero;