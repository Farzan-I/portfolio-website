import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { skills, technologies } from '../constants';
import { motion } from 'framer-motion';

import {styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion';


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h1 className={`${styles.sectionHeadText} text-center`}>Technologies</h1>
        <p className={`${styles.sectionSubText} text-center`}>What I have experience using</p>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white-100 text-[17px] leading-[30px]"
      >
        <ul className="mt-5 list-disc ml-5 flex justify-center flex-wrap space-x-8 mb-6">
          {skills.map((skill, index) => (
            <li
              className="hover:text-secondary hover:scale-110 transition-transform duration-300"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
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

export default SectionWrapper(Tech, "techs");