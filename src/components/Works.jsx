import {Tilt} from "react-tilt"
import {motion} from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { sectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"

const ProjectCard = ({project})=>(
  <p>{project}</p>
)

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects</p>

        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="flex w-full">

        <motion className="p"
        variants={fadeIn("","",0.1,1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex minus, nemo nesciunt, unde doloribus quidem quas consequatur sequi labore error assumenda officiis quia est vel? Iusto modi dicta excepturi explicabo aut. Dolorem quis perferendis possimus. Delectus quo consequatur nesciunt eos, impedit ipsum similique porro quasi dignissimos officia dolorem repellendus vel. Inventore fuga omnis beatae repellendus, impedit eaque accusamus quaerat repudiandae sint pariatur, dolorem libero. Voluptatibus minima quisquam perspiciatis magni qui, sed quibusdam cumque, id distinctio doloremque aut beatae nostrum iusto hic esse molestias eos ducimus, dolor consectetur incidunt asperiores expedita ex soluta saepe? Beatae nobis ut, distinctio architecto tenetur nesciunt voluptatum iste aut eaque aliquam suscipit consectetur blanditiis fugiat. Quasi tempora commodi ipsam at exercitationem eaque cupiditate repellendus ipsum accusantium. Labore ipsum iusto dolores magni accusamus deleniti. Laudantium, doloremque.

        </motion>

      </div>

      <div className="flex mt-20 fle-wrap gap-7">
          {
            projects.map((project, index)=>(
              <ProjectCard key={`project-${index}`} {...project}/>
            ))
          }
      </div>
    </>
  )
}

export default sectionWrapper(Works,"")