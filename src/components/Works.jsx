import {Tilt} from "react-tilt"
import {motion} from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { sectionWrapper } from "../hoc"
import { projects,Hospitalitys,RealEstates } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"
import { useState } from "react"
import Real from "./Real"


const HospitalityCard = ({index, name,image,source_code_link})=>(
  <motion.div variants={fadeIn("up","spring", index * 0.5,0.75)}>
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


const ProjectCard = ({index, name,description,tags,image,source_code_link})=>(
  <motion.div variants={fadeIn("up","spring", index * 0.5,0.75)}>
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

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pionter"
              >
                  <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
              </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {
            tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))
          }
        </div>
    </Tilt>

  </motion.div>
)

const Works = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>My Projects</p> */}

        <h2 className={styles.sectionHeadText}>Hospitality.</h2>
      </motion.div>

      {/* <div className="flex w-full">

        <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex minus, nemo nesciunt, unde doloribus quidem quas consequatur sequi labore error assumenda officiis quia est vel? Iusto modi dicta excepturi explicabo aut. Dolorem quis perferendis possimus. Delectus quo consequatur nesciunt eos, impedit ipsum similique porro quasi dignissimos officia dolorem repellendus vel. Inventore fuga omnis beatae repellendus, impedit eaque accusamus quaerat repudiandae sint pariatur, dolorem libero. Voluptatibus minima quisquam perspiciatis magni qui, sed quibusdam cumque, id distinctio doloremque aut beatae nostrum iusto hic esse molestias eos ducimus, dolor consectetur incidunt asperiores expedita ex soluta saepe? Beatae nobis ut, distinctio architecto tenetur nesciunt voluptatum iste aut eaque aliquam suscipit consectetur blanditiis fugiat. Quasi tempora commodi ipsam at exercitationem eaque cupiditate repellendus ipsum accusantium. Labore ipsum iusto dolores magni accusamus deleniti. Laudantium, doloremque.

        </motion.p>

      </div> */}

   
 

{/* 
      <div className="flex mt-20 fle-wrap gap-7">
          {
            projects.map((project, index)=>(
              <ProjectCard key={`project-${index}`} {...project}/>
            ))
          }
      </div> */}

      <div className=" mt-20 grid grid-cols-1 xs:grid-cols-3 gap-4">
          {
            Hospitalitys.map((Hospitality, index)=>(
              <HospitalityCard key={`project-${index}`} {...Hospitality}/>
            ))

          }

      </div>  
      
    </>
  )
}

export default sectionWrapper(Works,"Project")