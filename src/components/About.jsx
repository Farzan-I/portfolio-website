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
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
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

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)} 
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        First of all, allow me to thank you for visiting my website. A lot of blood, sweat, caffeine and tears went into making this happen! 
        I hope you have a great experience and learn exactly who the person behind the name (that most people don&apos;t know how to pronounce) is and what I&apos;m all about.

        <br/>
        <br/>

        A career changer from a business background with extensive management experience, 
        I have worked in numerous full agile teams and have collaborated on several projects using 
        various technologies. My fascination for coding started while in my first role after university but I never took it seriously as imposter syndrome kicked in very early and I pursued other careers.

        <br/>
        <br/>

        Only in my role as a marketing executive did I realise I had a natural knack for software development. It was here where I put my doubts aside and helped create the  
        <a href="https://www.culturalsignatures.com/" rel="noreferrer" target="_blank">
          <span className="text-white"> company&apos;s website</span>
        </a>. I enjoyed working on the website so much so that I spent my spare time studying HTML, CSS and Vanilla JavaScript. I then took the bold move to join one of Europe&apos;s leading coding 
        bootcamps to expand on my new found knowledge, where I got to grips with what it takes to be a professional software developer. I have been freelancing/consulting ever since graduating and looking forward to starting my first professional role as a developer!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")