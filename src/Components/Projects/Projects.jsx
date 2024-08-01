import { Box, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import glamour from "../assets/Gudget.png"
import columbus from "../assets/Amezon.png";

import healthcart from "../assets/Travell.png";
import emart from "../assets/dragdrop.png";
import game from "../assets/Gamezy.png";
export default function Projects() {
    const Project = [
       
        {
            id: 1,
            src: healthcart,
            name: "Traveling",
            desc: "*Traveling* is a hotel booking website where user can book different holiday paclages and flights and cars bookings across the different part of the world.",
            stack: "HTML | CSS | Javascript",
            github: "https://github.com/vaibhav7895/dapper-nation-4838",
            deploy: "https://travel-vaibhav7895.vercel.app/"

        },
        {
            id: 2,
            src: columbus,
            name: "Fly Buy",
            desc: "*Flybuy* is a vast internet-based enterprise that sells men's,women's and kid's goods, either directly or as the middleman between other retallers and Amazon.com's millions od customers.",
            stack: "HTML | CSS | JavaScript | Reactjs | Chakra-UI | NextJs | Redux | JSON server",
            github: "https://github.com/aniketghormare/Clone_of_Amezon",
            deploy: "https://strong-cactus-252a35.netlify.app/"
        },
        {
            id: 3,
            src: game,
            name: "GAMEZY",
            desc: "*GAMEZY* is a online video game rental subscription service that specializes in providing games for Nintendo,Sony and Microsoft systems starting from the sixth generation onwards.",
            stack: " ReactJs | Chakra-UI | Nodejs | MongoDB | Express",
            github: "https://github.com/aniketghormare/guiltless-turkey-1550",
            deploy: "https://comforting-chaja-8614b3.netlify.app/"
        }
        
        ,
        {
            id: 4,
            src: glamour,
            name: "Gadget Vault",
            desc: "*Gadget Vault* is online products selling website.It sells Laptops,Mobiles,Fitness products and Health care products. ",
            stack: "JavaScript | HTML | CSS | JSON server",
            github: "https://github.com/Anji515/BestBuy-Clone",
            deploy: "https://clinquant-sable-5d4c06.netlify.app/"

        },
        {
            id: 5,
            src: emart,
            name: "Todo-App",
            desc: "*Todo-App* is a application where I performed the crud operation with drag drop functionality.",
            stack: "ReactJs | Tailwind-CSS | MongoDB | Nodejs | Expressjs",
            github: "https://github.com/aniketghormare/task-builder-app",
            deploy: "https://heroic-melba-3dbc17.netlify.app/"
        }
       
    ]

    return (
        <div>
            <Box id="projects" w={{ base: "95%", md: "80%" }} m="auto" mt="5%" p="30px">
                <Heading _hover={{ textDecoration: "underline" }} textDecoration="none" color="rgb(210, 226, 167)" mb="5%">PROJECTS</Heading>
                {Project.map((e) => <ProjectCard key={e.id} data={e} />)}
            </Box>
        </div>
    )
}