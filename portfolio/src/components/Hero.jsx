import { motion } from "framer-motion"

import { styles } from "../Style"
import { ComputersCanvas } from "./canvas"



const Hero = () => {
  return (
   <section className="relative w-full h-[1000px]">
     <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flez-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-5">
      <div className="w-5 h-5 rounded-full bg-violet-500" />
       <div className="w-1  h-40 sm:h-80 violet-gradient" />
        </div> 
      <div className="flex flex-col justify-center mt-5 ">
        <div className="text-6xl font-bold">
          Hi, I'm  <span className="text-violet-500" >Nishant</span>
        </div>
        <div className="text-2xl  mt-5">
          I develop user interfaces and <br className="sm:block hidden"/>
          full stack web applications
        </div>
        </div>  

     

     </div>
     <ComputersCanvas />

    <div className="absolute xs:bottom-10 bottom-32
     w-full flex justify-center items-center">
       <a href="#Aboutt"  >
        <div className="w-[35px] h-[64px] border-4 
         p-2 flex justify-center items-start rounded-full" > 
         <motion.div 
         animate={{
          y:[0, 24, 0]
         }}
         transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse'

         }}
         className="w-3 h-3 rounded-full bg-white-100" />
        
         
         

        </div>
        </a>
    </div>
   </section>
  )
}

export default Hero