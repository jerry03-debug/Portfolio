import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from "framer-motion";
import {styles} from '../style'
import { services } from "../constants";
import { fadeIn,textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';


const ServiceCard = ({title,icon,index})=>{
  return(    
      <Tilt className="w-full h-full" >
        <motion.div variants={fadeIn("right","spring",0.5*index)} className="w-full h-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" >
          <div
            options={{
              max:45,
              scale:1.05,
              speed:450,
            }}
            className="bg-tertiary rounded-[20px] py-8 px-6 h-full min-h-[220px] flex justify-evenly items-center flex-col gap-4 ">
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>


          
          

          </div>

         </motion.div> 
      </Tilt>
  )
}
    


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>Profil</h2>
    </motion.div>

    <motion.p  variants={fadeIn("","",0.1,1)} className="mt-4  text-gray-100 text-[17px] max-w-3xl leading-[30px]">
     Ingénieur en informatique diplômé de l'École Supérieure Polytechnique de Dakar, je conçois et développe des applications web et mobiles, de la conception à la mise en production. J'aime les projets à fort impact et tout ce qui laisse de la place à la créativité, et je prends autant de plaisir à apprendre qu'à partager ce que je sais.
    </motion.p>

    <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 gap-7 w-full'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service} />
        ))}
    </div>


   </>
  )
}

export default SectionWrapper(About,"about")  