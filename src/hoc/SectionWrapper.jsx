import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import {staggerContainer} from '../utils/motion'

const SectionWrapper = (Component,idName) => 
 function HOC() {
       return(
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            // amount:"some" et non une fraction : une section plus haute que
            // l'écran ne peut jamais atteindre un seuil de 25 %, l'animation ne
            // se déclenche alors jamais et la section reste en opacity:0 —
            // invisible mais toujours cliquable.
            viewport={{once:true,amount:"some"}}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        
        >
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            <Component/>
        </motion.section>
       )
 }

export default SectionWrapper;