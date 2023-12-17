import {Tilt} from "react-tilt"
import {motion} from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { sectionWrapper } from "../hoc"
import {RealEstates } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"
import { useState } from "react"


const RealEstateCard = ({index, name,image,source_code_link})=>(
    <motion.div variants={fadeIn("up","spring", index * 0.55,0.75)}>
    <Tilt
      options={{
        max:45,
        scale:1,
        speed:50
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
  
          {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pionter"
              >
                  <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
              </div>
          </div> */}
        </div>
  
        
    </Tilt>
  
  </motion.div>
    
  )
  

const Real = () => {
  return (
    <>
         <motion.div variants={textVariant()}>
         <h2 className={styles.sectionHeadText}>RealEstate.</h2>
         </motion.div>
       

    
    <div className=" mt-10 grid grid-cols-1 xs:grid-cols-3 gap-4">
    {
      RealEstates.map((RealEstate, index)=>(
        <RealEstateCard key={`Realestate-${index+1}`} {...RealEstate}/>
      ))
    }
    </div>


    </>
  )
}

export default sectionWrapper(Real,"Real")
