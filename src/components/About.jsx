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
          className="bg-card rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white-100 text-[20px] font-bold text-center justify">
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
        className="mt-10 text-white-100 text-[17px] max-w-3xl leading-[30px]"
      >
        First of all, allow me to thank you for visiting my website. A lot of blood, sweat, caffeine and tears went into making this happen. 
        This website is optimised to be viewed on desktop PCs, but it&apos;s compatible with small devices. I hope you have a great experience 
        nonetheless and learn exactly who the person behind the name that most people don&apos;t know how to pronounce is!

        <br/>
        <br/>

        The path that led me to this point was never straight forward. A lot of self-doubt, disbelief and delaying forced me to pursue other career avenues.
        My fascination with coding did however begin in my graduate role. Imposter syndrome did kick in early and I dismissed the idea of becoming an engineer.
        
        While working in management, marketing and finance roles, I still had hopes of knowing how to efficiently use the terminal on a computer like a pro, but still considered it only a dream. 
        It was only until my role as a marketing executive that I found my natural knack for software engineering.
        
        <br/>
        <br/>

        Here I helped create the 
        <a href="https://www.culturalsignatures.com/" rel="noreferrer" target="_blank">
          <span className="text-secondary"> company&apos;s website</span>
        </a> and enjoyed it so much that I spent my spare time studying HTML, CSS, JavaScript, and Ruby. After the Covid-19 pandemic, I joined a 
        <a href="https://www.makers.tech/" rel="noreferrer" target="_blank">
          <span className="text-secondary"> leading coding bootcamp</span>
          </a> to expand my knowledge and actualise my dream of becoming a software engineer. 
        I have experience of working in full agile teams and have collaborated on various projects using a wide range of technologies. Most can be found below. 

        I&apos;ve been freelancing ever since and eager to start my first professional role as an engineer with a forward thinking company!
       </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")