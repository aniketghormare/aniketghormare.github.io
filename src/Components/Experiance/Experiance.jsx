import { Box, Heading } from "@chakra-ui/react";
// import ProjectCard from "./ProjectCard";
import glamour from "../assets/Gudget.png"
import columbus from "../assets/Amezon.png";

import healthcart from "../assets/Travell.png";
import emart from "../assets/dragdrop.png";
import game from "../assets/Gamezy.png";
import ExperianceCard from "./ExperianceCard";
export default function Experiance() {
    const Project = [
       
        {
            id: 1,
            companyName:"Softwin System's Pvt. Ltd. Mohali",
            src: healthcart,
            exp:"(Apr 24 - July 24)",
            name: "Traveling",
            desc: "As a Full Stack Developer, I am responsible for developing the user interface using NEXT.js and implementing the backend with Node.js technology.",
            stack: "HTML | CSS | Javascript",
            github: "https://github.com/vaibhav7895/dapper-nation-4838",
            deploy: "https://travel-vaibhav7895.vercel.app/"

        },
        {
            id: 2,
            src: columbus,
            exp:"(June 23 - Mar 24)",
            companyName:"Sikarwar Software's Pvt. Ltd. Gurugram",
            name: "Fly Buy",
            desc: "As a MERN Stack Developer, I am responsible for developing the user interface using NEXT.js and implementing the backend with Node.js technology.",
            stack: "HTML | CSS | JavaScript | Reactjs | Chakra-UI | NextJs | Redux | JSON server",
            github: "https://github.com/aniketghormare/Clone_of_Amezon",
            deploy: "https://strong-cactus-252a35.netlify.app/"
        }

        
       
    ]

    return (
        <div>
            <Box id="experience" w={{ base: "95%", md: "80%" }} m="auto" mt="5%" p="30px">
                <Heading _hover={{ textDecoration: "underline" }} textDecoration="none" color="rgb(210, 226, 167)" mb="5%">EXPERIENCE</Heading>
                {Project.map((e) => <ExperianceCard key={e.id} data={e} />)}
            </Box>
        </div>
    )
}