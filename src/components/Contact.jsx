import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';     

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_sya0pp8',
      'template_tulzscn',
      {
        from_name: form.name,
        to_name: 'Farzan',
        from_email: form.email,
        to_email: 'farzanimanzadeh@hotmail.co.uk',
        message: form.message,
      },
      'V2EU68RVuZAo-jg0E'
      )
      .then(() => {
        setLoading(false);
        alert('Thanks for getting in touch! I will get back to you quicker than you can say Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch (if you don\'t know what that is, it\'s a Welsh Town name)');

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)

        console.log(error);

        alert('Something went wrong! Please try again.')
      })
  }
  
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-quinary p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <p className={styles.sectionSubText}>Get in touch</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white-100 font-medium mb-4">
              Your name:
            </span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Let's get on first name basis"
              className="bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium hover:placeholder:text-white"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white-100 font-medium mb-4">
              Your Email:
            </span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="No junk sent, ever. Promise"
              className="bg-black-100 py-4 px-6 placeholder:text-secondary text-white-100 rounded-lg outlined-none border-none font-medium hover:placeholder:text-white"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white-100 font-medium mb-4">
              Your message for my eyes only:
            </span>
            <textarea 
              row="7" 
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="....."
              className="bg-black-100 py-4 px-6 placeholder:text-secondary text-white-100 rounded-lg outlined-none border-none font-medium hover:placeholder:text-white"
            />
          </label>

          <button
            type="submit"
            className="bg-black-100 py-3 px-8 outline-none w-fit text-white-100 font-bold shadow-md shadow-secondary rounded-xl hover:text-secondary hover:shadow-white"
          >
            { loading ? 'Sending...' : 'Send' }
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")