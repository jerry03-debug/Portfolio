import {motion} from 'framer-motion'
import {styles} from '../style'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'>
        </div>
            <div className="w-1 sm:h-80 h-40 violet-gradient "></div>
          </div>


          <div className=''>
              <h1 className={`${styles.heroHeadText}`}>Salut, moi c'est<span className="text-[#915eff] ml-1"> Diéry Dia</span></h1>
            <p className={`${styles.heroSubText} italic`}>
              Développeur Fullstack-Designer
            </p>
          </div>




      </div>
          <ComputersCanvas/>

          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
            <a href="#about">
              <div className='w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2'>
                <motion.dev
                animate={{
                  y: [0,24,0]
                }}
                transition={{
                  duration:1.5,
                  repeat:Infinity,
                  repeatType:'loop'
                }}
                className='w-3 h-3 rounded-full bg-purple-500 mb-1'
                />
              </div>
            </a>
          </div>
    </section>
  )
}

export default Hero