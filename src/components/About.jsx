import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from "framer-motion";
import {styles} from '../style'
import { services } from "../constants";
import { fadeIn,textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';


const ServiceCard = ({title,icon,index})=>{
  return(    
      <Tilt className="xs:w-[300px] w-full " >
        <motion.div variants={fadeIn("right","spring",0.5*index)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" >
          <div
            options={{
              max:45,
              scale:1.05,
              speed:450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col ">
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

    <motion.p  variants={fadeIn("","",0.1,1)} className="mt-4 text-gray-100 text-[17px] max-w-3xl leading-[30px]">
    Salut ! Je suis un développeur full stack passionné et Élève ingenieur en informatique à l'École Supérieure Polytechnique de Dakar. Mon parcours dans le monde de la technologie m'a permis de combiner ma créativité avec mes compétences techniques pour créer des solutions innovantes. Explorez ces pages pour découvrir mes projets et ma passion pour la programmation. Bienvenue dans mon univers numérique, où l'innovation et la technologie se rencontrent !
    </motion.p>

    <div className='mt-20 grid justify-items-center lg:grid-cols-2 xl:grid-cols-3 gap-7'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service} />
        ))}
    </div>


   </>
  )
}

export default SectionWrapper(About,"about")  