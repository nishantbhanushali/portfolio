import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-40'>
      {technologies.map((technology) => (
        <div className='w-40 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech