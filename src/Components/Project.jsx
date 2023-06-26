import { Box, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjextCard";
import GadgetVault from "../Docs/gadgetvault.png";
import Travel from "../Docs/Travel.png";
import flybuy from "../Docs/flybuy.png";
import Gamezy  from "../Docs/Gamezy.png";

export default function Project() {
    const Project = [
        {
            id: 1,
            src: GadgetVault,
            name: "GadgetVault",
            desc: "*GadgetVault* is online products selling website. It sells Laptops, Mobiles, Fitness products and Health care products . ",
            stack: "JavaScript | HTML | CSS | JSON server",
            github: "https://github.com/Anji515/BestBuy-Clone",
            deploy: "https://fanciful-mermaid-4e6fb4.netlify.app/",
           
        },
        {
            id: 2,
            src: Travel,
            name: "Traveling",
            desc: "*Traveling* is a hotel booking website where user can book different holiday packages and flights and cars bookings across the different paart of the world.",
            stack: "HTML | CSS | JavaScript",
            github: "https://github.com/vaibhav7895/dapper-nation-4838",
            deploy: "https://travel-lovat-eight.vercel.app/"
           
        },
        {
            id: 3,
            src: flybuy,
            name: "Fly Buy",
            desc: "*Flybuy* is a vast Internet-based enterprise that sells men's, women's and kid's goods, either directly or as the middleman between other retailers and Amazon.com's millions of customers.",
            stack: "HTML | CSS | JavaScript |  ReactJs | Chakra-Ui | NextJs | Redux |JSON server",
            github: "https://github.com/aniketghormare/-potent-toothbrush-7925",
            deploy: "https://strong-cactus-252a35.netlify.app/",
        },
        {
            id: 4,
            src: Gamezy,
            name: "GAMEZY",
            desc: "*GAMEZY* is a online video game rental subscription service that specializes in providing games for Nintendo, Sony and Microsoft systems starting from the sixth generation onwards.",
            stack: "HTML | CSS | JavaScript |  ReactJs | Chakra-Ui |JSON server",
            github: "https://github.com/aniketghormare/guiltless-turkey-1550",
            deploy: "https://comforting-chaja-8614b3.netlify.app/",
        }
    ]
   
    return (
        <div>
            <Box id="projects" w={{base: "95%", md: "80%"}} m="auto" mt="5%" p="30px">
                <Heading textDecoration="underline" color="rgb(232,118,118)" mb="5%">Projects</Heading>
                {Project.map((e) => <ProjectCard key={e.id} data={e} />)}
            </Box>
        </div>
    )
}