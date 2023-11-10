import React from 'react'
import {AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer class="relative py-3 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-4">
      <div class="relative z-[1] container m-auto px-6 md:px-12">
        <div class="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div class="flex flex-col md:flex-row items-center justify-center">
            <div class="w-full space-x-12 flex  justify-center text-gray-300 sm:w-7/12 ">
              <ul role="list" class="flex gap-4 ">
                <li>
                  <a
                  onClick={() => window.open("https://github.com/jerry03-debug", "_blank")}
                    class="flex items-center space-x-2 hover:text-sky-400 transition"
                  >
                   <AiOutlineGithub size={20}/>
                    <span>Github</span>
                  </a>
                </li>
                <li>
                  <a
                  onClick={() => window.open("https://www.linkedin.com/in/diery-dia-9a8190243/", "_blank")}

                    href="https://www.linkedin.com/in/diery-dia-9a8190243/"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-2 hover:text-sky-400 transition no-wrap"
                    >
                  
                 
                    <AiFillLinkedin size={20} />
                  <span>LinkedIn</span>
                  </a>

                </li>
              </ul>
            </div>
            <div class=" text-center sm:text-left md:absolute md:left-8  w-full sm:mt-auto">
              <p>&copy; {new Date().getFullYear()} Jay. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" class="absolute h-full inset-0 flex items-center">
        <div
          aria-hidden="true"
          class="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
        ></div>
      </div>
      <div
        aria-hidden="true"
        class="absolute inset-0 w-full h-full bg-[#020314] opacity-80"
      ></div>
    </footer>
  )
}

export default Footer
