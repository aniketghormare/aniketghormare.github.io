import { Box, Grid, Heading, VStack } from "@chakra-ui/react";
import SkillCard from "./SkillCard";
import Tools from "../Tools/Tools";

export default function Skills() {
    const skills = [
        {
            src : "https://cdn.sanity.io/images/897el8p6/production/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png",
            name : "HTML"
        },
        {
            src : "https://cdn.sanity.io/images/897el8p6/production/107574d887f1c07c9fbea0704de7f293e244a8f3-480x480.png",
            name : "CSS",
        },
        {
            src : "https://cdn.sanity.io/images/897el8p6/production/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png",
            name : "JavaScript",
        },
        {
            src : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
            name : "React.js",
        },
        {
            src : "https://www.coffeeclass.io/logos/chakra-ui.png",
            name : "Chakra UI",
        },
        {
            src : "https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png",
            name : "Node.js",
        },
        {
            src : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Status_iucn_EX_icon.svg/480px-Status_iucn_EX_icon.svg.png",
            name : "Express.js",
        },
        {
            src : "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
            name : "MongoDB",
        }
    ]

    return (
        <div>
            <Box id="skills" w="80%" m="auto" mt="5%" p="30px">
                <VStack>
                    <Heading _hover={{textDecoration:"underline"}} textDecoration="none" color="rgb(210, 226, 167)" mb="5%">SKILLS</Heading>
                    <Grid templateColumns={{base: "repeat(2,1fr)", sm: "repeat(2,1fr)", md: "repeat(3,1fr)" ,lg:"repeat(4,1fr)"}} gap="30px 20px" justifyContent="center" alignItems="center">
                        {skills.map((ele) => <SkillCard key={Math.random()} src={ele.src} name={ele.name} />)}
                    </Grid>
                </VStack>
            </Box>
            <Tools/>
        </div>
    )
}