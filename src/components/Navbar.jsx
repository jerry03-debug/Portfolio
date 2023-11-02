import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {styles} from '../style'
import {navLinks} from '../constants'
import {menu,close,logo} from '../assets'


const Navbar = () => {
  const [active,setActive]=useState("")
  const [toggle,setToggle]=useState(false)

  const handleClick = (title)=>{
    setActive(title)
  }

  return (
    <nav className = {`${styles.paddingX} w-full flex items-center  fixed top-0 z-20 bg-primary `}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/"
        className='flex items-center gap-2'
        onClick={()=>{
          setActive("");
          window.scrollTo(0,0)
        }}
        >
          <img src={logo} alt="logo" className="w-24  object-contain"/>
          <p className=" text-white text-sm md:text-xl font-bold cursor-pointer flex flex-row ">Diery Dia <span className="ml-1 ">| Fullstack Dev</span> </p>
        </Link>
      
        <ul className="list-none hidden sm:flex flex-row gap-10 ">
          {navLinks.map((link)=>(
            <li 
              key={link.id} 
              className={`${
                active===link.title?"text-white":"text-secondary"
              } hover:text-white font-medium cursor-pointer`}

              onClick = {()=>setActive(link.title)}


            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))
          }
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={toggle? close:menu}
            alt = "menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer  hover:rotate-180 transition-all ease-linear'
            onClick={()=> setToggle(!toggle)}
          />

          <div className={`${!toggle?'hidden':'flex'} p-6 bg-gradient-to-r black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-col gap-4 ">
          {navLinks.map((link)=>(
            <li 
              key={link.id} 
              className={`${
                active===link.title?"text-white":"text-secondary"
              } hover:text-white font-medium cursor-pointer`}
              
              onClick = {()=>{
                setToggle(!toggle)
                setActive(link.title)
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))
          }
        </ul>
          </div>

        </div>

      </div>
    </nav>    

    
  )
}

export default Navbar