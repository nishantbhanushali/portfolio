import { motion } from "framer-motion"
import {Tilt }from "react-tilt"
import { styles } from "../Style"
import {services} from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
const About = () => {
  return (
<>
  <motion.div variants = {textVariant()}>
    <p className={`${styles.heroSubText}`}>Introduction</p>
    <h2 className={`${styles.heroHeadText}`}>OverView</h2>
  </motion.div>
  <motion.p
   variants={fadeIn("", "", 0.1, 1)}
   className="mt-4 text-secondary text-[17px] max-w-3xl"
  >My expertise also extends to the exciting world of Web3, where I focus on developing decentralized applications (dApps) and integrating blockchain technology to bring secure and transparent solutions to life.

With a strong foundation in JavaScript, TypeScript, and frameworks like React.js, I ensure seamless frontend and backend experiences. 

I thrive on solving complex problems and bringing creative ideas to fruition. Whether it’s crafting efficient APIs, designing smooth user interfaces, or exploring cutting-edge blockchain solutions, I’m always ready to tackle new challenges and make a meaningful impact in the tech world.

  </motion.p>
</>
  )
}

export default About