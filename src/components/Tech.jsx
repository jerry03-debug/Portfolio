import React from 'react'
import { SectionWrapper } from '../hoc'
import {BallCanvas} from './canvas'
import {technologies} from '../constants';



const Tech = () => {
  return (
  <div className="flex relative flex-row py-3 justify-center flex-wrap gap-10 ">
      <h1 className='absolute top-0 -top-5'>Voici mes outils préférés pour faire des merveilles technologiques !</h1>
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