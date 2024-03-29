import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FE0039]" />
          <div className="w-1 sm:h-80 h-60 red-gradient-hero" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white-100 text-outline`}>Hi<span className="text-[#FE0039]">, </span> I&apos;m <span className="text-[#FE0039]">Farzan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-outline-small`}>
            A recent career changer with a background in business looking for 
            my first professional role as an engineer! 
            <br className="sm:block hidden"/>
          </p>
          <br className="sm:block hidden"/>
        </div>
      </div>
      
      <ComputersCanvas />

      <div className="scroll-indicator absolute xs:bottom-10 bottom-20">
        <a className='scroll-inner' href="#about">
          <p>
            Press me!
          </p>
          <div className="w-[35px] h-[84px] rounded-3xl border-4 border-white-100 flex justify-center items-start p-2">
            <motion.dev 
              animate={{
                y: [0, 50, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-white-100 mb-1"
            />
          </div>
            
        </a>
      </div>
    </section>
  )
}

export default Hero