import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../Style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)} // Fade in from right
      initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and move up slightly
      animate={{ opacity: 1, y: 0 }}  // End with full opacity and normal y position
      transition={{
        delay: index * 0.3, // Delayed animation per card
        duration: 0.75, // Animation duration for smooth transition
        ease: "easeOut", // Easing function for smoothness
      }}
      whileHover={{ scale: 1.1 }} // Scale up on hover
      whileTap={{ scale: 0.95 }}   // Slight scale down on tap
      className="green-pink-gradient p-[1px] rounded-[20px] transition-all"
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        options={{
          max: 180,
          scale: 1,
          speed: 450,
        }}
      >
        <motion.img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
          whileHover={{ rotate: 360 }} // Rotation effect on hover
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (

    <div className="min-h-screen flex flex-col justify-center items-center">
      <motion.div
        variants={textVariant()}
        className="text-center mb-8"
      >
        <p className={`${styles.heroSubText}`}>Introduction</p>
        <h2 className={`${styles.heroHeadText}`}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary text-[17px] max-w-3xl leading-[30px] text-center mb-12"
      >
        My expertise also extends to the exciting world of Web3, where I focus
        on developing decentralized applications (dApps) and integrating
        blockchain technology to bring secure and transparent solutions to life.
        With a strong foundation in JavaScript, TypeScript, and frameworks like
        React.js, I ensure seamless frontend and backend experiences.
        I thrive on solving complex problems and bringing creative ideas to
        fruition. Whether it’s crafting efficient APIs, designing smooth user
        interfaces, or exploring cutting-edge blockchain solutions, I’m always
        ready to tackle new challenges and make a meaningful impact in the tech
        world.
      </motion.p>
      <div className="flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
   
  );
};

export default About;
