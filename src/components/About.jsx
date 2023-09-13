import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)} 
        className="w-full red-yellow-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <p className={styles.sectionSubText}>Introduction</p>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)} 
        className="mt-10 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        First of all, allow me to thank you for visiting my website. A lot of blood, sweat, caffeine and tears went into making this happen! 
        I hope you have a great experience and learn exactly who the person behind the name (that most people don&apos;t know how to pronounce) is and what I&apos;m all about.

        <br/>
        <br/>

        With extensive business management experience, I&apos;ve worked in full agile teams and collaborated on various projects using various technologies. Most can be found below. 
        My fascination with coding began in my graduate role, but I pursued other careers as imposter syndrome kicked in early.

        <br/>
        <br/>

        As a marketing executive, I discovered my natural talent for software engineering. I helped create the 
        <a href="https://www.culturalsignatures.com/" rel="noreferrer" target="_blank">
          <span className="text-secondary"> company&apos;s website</span>
        </a> and enjoyed it so much that I used my spare time studying HTML, CSS, JavaScript, and Ruby. After the Covid-19 pandemic, I joined a leading coding bootcamp to expand my knowledge and become a professional software engineer. Since graduating, 
        I&apos;ve been freelancing and eager to start my first professional role as an engineer!
       </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")