import { motion } from 'framer-motion'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { styles } from '../style'
import {experiences} from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({experience})=>{
  return(

    <VerticalTimelineElement
    contentStyle={{background:"#1d1836",color:"#fff"}}
    contentArrowStyle={{borderRight:"7px solid"}}
    date={experience.date}
    iconStyle={{
      background:experience.iconBg
    }}
    icon={
      <div className='items-center justify-center flex w-full h-full'>
        <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%]  object-contain"/>

      </div>

    }
  >
    <div>
      <h3 className='text-white text-[24px]'>
        {
          experience.title
        }
      </h3>

      <p className='text-secondary text-[16px] m-0 font-semibold'>{experience.company_name}</p>
    </div>
        <ul className="list-disc ml-5 mt-5 space-y-2">
        {experience.points.map((point,index)=>{
          return(

            <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        )
        })}

        </ul>

  </VerticalTimelineElement>
)

}


const Experience = () => {
  return (
   < >
    <motion.div
      variants={textVariant()}
    >
       <p className={styles.sectionSubText}>
       Ce que j'ai eu à faire
      </p>
      <h2 className={styles.sectionHeadText}>Expérience</h2>

    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {
          experiences.map((experience,index)=>(
            <ExperienceCard key={index} experience={experience}/>

          ))
        }
      </VerticalTimeline>
    </div>
   </>
  )
}

export default SectionWrapper(Experience,"work")