import React from 'react'
// import Tilt from 'react-tilt'
import { motion } from "framer-motion";
import {styles} from '../style'
import { services } from "../constants";
import { fadeIn,textVariant } from "../utils/motion";
const ServiceCard = ({title,icon,index})=>{
  return(    
    <p>{title}</p>
  )
}
    
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p  variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate amet placeat. Doloribus iste aperiam omnis! Earum, velit quo error, ea consectetur incidunt corrupti maiores exercitationem perferendis sint placeat ut?
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente aut, aperiam reiciendis explicabo excepturi vitae autem esse culpa, magni praesentium, nisi officiis nam. Doloremque perspiciatis vitae fuga optio. Minus, molestiae.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service} />
        ))}
    </div>


   </>
  )
}

export default About