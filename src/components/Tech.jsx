import React from 'react'
import { SectionWrapper } from '../hoc'
import {BallCanvas} from './canvas'
import {technologies} from '../constants';



const Tech = () => {
  return (
  <div className="flex flex-row justify-center flex-wrap gap-10">
    
    {
      technologies.map((technology)=>{
        return(

          
        <div className="w-28 h-28  " key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
          )
    
      })
    }


  </div>
  )
}

export default Tech