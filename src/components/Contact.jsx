import {useState, useRef} from 'react'
import {motion} from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { sectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState(
    {
      name:"",
      email: "",
      message:"",
    }
  )

  const [loading, setLoading] = useState(false)

  const handlechange =(e) =>{
      const {name, value} = e.target
      
      setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    // e.preventDefault();
    // setLoading(true);

    // emailjs
    //   .send(
    //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //     {
    //       from_name: form.name,
    //       to_name: "JavaScript Mastery",
    //       from_email: form.email,
    //       to_email: "sujata@jsmastery.pro",
    //       message: form.message,
    //     },
    //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert("Thank you. I will get back to you as soon as possible.");

    //       setForm({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);

    //       alert("Ahh, something went wrong. Please try again.");
    //     }
    //   );
  };

  return (
    <div className='flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row'>
      <motion.div
        variants={slideIn("left","tween", 0.2,1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in Touch</p>

        <h3 className={styles.sectionHeadText}>Contact</h3>

        <p className={`flex flex-col font-poppins text-white text-[14px] font-bold`}>Send Email to: <span className='mr-2 text-blue-300'>
          queennelly91@gmail.com 
          </span> 
           
          <span className='font-poppins text-blue-300 text-[14px]'>
              N9globalmultipurposeltd@gmail.com
          </span>
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-8 mt-12'>
          <label className="flex flex-col">
              <span className='mb-4 font-medium text-white'>Your Name</span>
              <input 
                type="text" 
                name="name"
                value={form.name}
                onChange={handlechange}
                placeholder='Whats your name'
                className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placholder:text-secondary'
                />
          </label>

          <label className="flex flex-col">
              <span className='mb-4 font-medium text-white'>Your Email</span>
              <input 
                type="email" 
                name="email"
                value={form.email}
                onChange={handlechange}
                placeholder='Whats your email'
                className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placholder:text-secondary'
                />
          </label>

          <label className="flex flex-col">
              <span className='mb-4 font-medium text-white'>Your Message</span>
              <textarea
                rows="7" 
                
                name="message"
                value={form.message}
                onChange={handlechange}
                placeholder='Please how may i help you?'
                className='px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placholder:text-secondary'
                />
          </label>

          <button
            type='submit'
            className='px-8 py-3 font-bold text-white shadow-md outline-none bg-tertiary w-fit shadow-primary rounded-xl'
          >
              {loading ? "Sending...": "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right","tween", 0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
          <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default sectionWrapper(Contact, "contact")