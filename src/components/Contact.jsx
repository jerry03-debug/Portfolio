import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {HiOutlineDocumentDownload} from 'react-icons/hi'
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailSent,setEmailSent] = useState()

  const [loading, setLoading] = useState(false);
  //Télécharger CV
  const downloadCV = ()=>{
    const pdfUrl =  '/public/Mon_CV.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'CV-Diery-Dia.pdf'); // Changez le nom du fichier téléchargé si nécessaire

    // Appending the link to the body to trigger the download
    document.body.appendChild(link);
    link.click();

    // Removing the link from the body
    document.body.removeChild(link);
  }

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_kjxzh1y",
        "template_a4mi8np",
        
        
        {
          from_name: form.name,
          to_name: "Diery Dia",
          from_email: form.email,
          to_email: "diadiery3@gmail.com",
          message: form.message,
        },
        "rKdmdvFdcooVeKxiU"
      )
      .then(
        () => {
          setLoading(false);
          setEmailSent(true);
          setTimeout(()=>
            setEmailSent(null),4000)
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setEmailSent(false);
          setTimeout(()=>
            setEmailSent(null),4000)
          console.error(error);

        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Prénom</span>
            <input
            required
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Votre prénom ..."
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
            required
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Votre Email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'> Message</span>
            <textarea
            required
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='....'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <div className="flex gap-6">

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
            {loading ? "En cours d'envoi..." : "Envoyer"}
          </button>
          <span
            onClick={downloadCV}
            className='bg-purple-700  whitespace-nowrap py-2 px-4 hover:bg-transparent hover:border hover:border-purple-600  transition-all rounded-xl outline-none flex items-center gap-2 text-white font-bold shadow-md shadow-primary'
            >
             <HiOutlineDocumentDownload size={28}/> Mon CV 
          </span>
            </div>
          {emailSent && <span className="text-green-500 font-bold animate-pulse">Merci! Nous allons vous revenir le plus tot possible.</span>}
          {emailSent==false && <span className="text-red-500 font-bold animate-pulse">Oups! Une chose s'est mal passée, veuillez réessayez.</span>}
        </form>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");