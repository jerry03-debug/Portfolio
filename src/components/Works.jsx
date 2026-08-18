import React from "react";
import Tilt from 'react-parallax-tilt'
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { AiOutlineLink, AiOutlineWhatsApp, AiOutlineLock } from 'react-icons/ai';
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  year,
  description,
  tags,
  image,
  source_code_link,
  link_icon,
  note,
}) => {
  // Un vrai <a href> quand le projet a un lien : c'est le seul élément que iOS
  // Safari considère comme cliquable au toucher (un div + onClick reste inerte).
  // Sans lien, la carte reste un simple bloc : pas de clic mort à proposer.
  const hasLink = source_code_link !== "";
  const Card = hasLink ? motion.a : motion.div;
  const cardProps = hasLink
    ? {
        href: source_code_link,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Ouvrir ${name}`,
      }
    : {};

  return (
    <Card
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='block h-full'
      {...cardProps}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col'
      >
        <div className='relative w-full h-[230px] shrink-0'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover pointer-events-none'>
            <div
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center'
            >
              {link_icon === "site" ? (
                <AiOutlineLink className='w-6 h-6 text-white' />
              ) : link_icon === "whatsapp" ? (
                <AiOutlineWhatsApp className='w-6 h-6 text-white' />
              ) : link_icon === "private" ? (
                <AiOutlineLock className='w-5 h-5 text-secondary' />
              ) : (
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              )}
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <div className='flex items-start justify-between gap-3'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            {note && (
              <span className='mt-2 shrink-0 text-[12px] text-secondary italic'>
                {note}
              </span>
            )}
          </div>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-auto pt-4 flex flex-wrap items-center gap-2'>
          {year && (
            <p className='text-[14px] orange-text-gradient'>#{year}</p>
          )}
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </Card>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Ce que j'ai construit</p>
        <h2 className={`${styles.sectionHeadText}`}>Mes Projets.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-white text-[17px] max-w-3xl leading-[30px]'
        >
          Les projets suivants vous donneront une idée de mes compétences et mon expérience à travers des exemples concrets de mon travail. Chaque projet est brièvement décrit avec des liens vers les référentiels de code et des démonstrations en direct. Cela reflète ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies et à gérer efficacement des projets.
        </motion.p>
      </div>

      <div className='mt-20 grid justify-items-center lg:grid-cols-2 xl:grid-cols-3 gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");