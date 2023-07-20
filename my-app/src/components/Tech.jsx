import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';

import {styles } from '../styles'
import { textVariant } from '../utils/motion';


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadText} text-center`}>Techs</h1>
          <p className={`${styles.sectionSubText} text-center`}>What I have experience using</p>
        </motion.div>
      
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
        { technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");