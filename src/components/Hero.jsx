import {motion, useScroll, useTransform} from 'framer-motion'
import {useRef} from 'react'
import {styles} from '../style'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  const ref = useRef(null)
  // Parallax : le bloc titre dérive vers le bas et s'estompe au fil du scroll
  // sur la première hauteur d'écran, plus lentement que le reste de la page.
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 140])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative w-full h-screen mx-auto">
      <motion.div
        style={{y, opacity}}
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'>
        </div>
            <div className="w-1 sm:h-80 h-40 violet-gradient "></div>
          </div>


          <div className=''>
              <h1 className={`${styles.heroHeadText}`}>Salut, moi c'est<span className="text-[#915eff] ml-1"> Diéry Dia</span></h1>
            <p className={`${styles.heroSubText} italic`}>
              Ingénieur logiciel
            </p>
          </div>




      </motion.div>
          <ComputersCanvas/>

          <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
            <a href="#about">
              <div className='w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2'>
                <motion.div
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