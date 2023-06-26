import { Box, Grid, Heading, VStack } from "@chakra-ui/react";
import SkillCard from "./SkillCard";

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
            name : "ReactJs",
        },
        {
            src : "https://www.coffeeclass.io/logos/chakra-ui.png",
            name : "Chakra-Ui",
        },
        {
            src : "https://cdn.sanity.io/images/897el8p6/production/64f3e20f8ad906d56dea96863b6db87fad6efb52-64x64.png",
            name : "TypeScript",
        },
        {
            src : "https://cdn.sanity.io/images/897el8p6/production/91716227a0183f05eb4c2c846dda4ec6d3ea433c-480x480.png",
            name : "Redux",
        },
        {
            src : "https://www.creative-tim.com/assets/frameworks/icon-nextjs-552cecd0240ba0ae7b5fbf899c1ee10cd66f8c38ea6fe77233fd37ad1cff0dca.png",
            name : "NextJs",
        },
        {
            src : "https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png",
            name : "NodeJs",
        },
        {
            src : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Status_iucn_EX_icon.svg/480px-Status_iucn_EX_icon.svg.png",
            name : "Express.Js",
        },
        {
            src : "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
            name : "MongoDB",
        },
        {
            src : "https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2022/03/cypress.png?fit=364%2C364&ssl=1",
            name : "Cypress",
        },
        {
            src : "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png",
            name : "Jest",
        },
        {
            src : "https://cdn.sanity.io/images/897el8p6/production/a804a741fb26f6c236c73086a87cfc9f64106401-480x480.png",
            name : "Git",
        },
        {
            src : "https://cdn.cdnlogo.com/logos/v/82/visual-studio-code.svg",
            name : "VsCode",
        },
        {
            src : "https://img.icons8.com/color/512/npm.png",
            name : "NPM",
        }
       
    ]

    return (
        <div>
            <Box id="skills" w="80%" m="auto" mt="5%" p="30px">
                <VStack>
                    <Heading textDecoration="underline" color="rgb(232,118,118)" mb="5%">Skills</Heading>
                    <Grid templateColumns={{base: "repeat(2,1fr)", sm: "repeat(2,1fr)", md: "repeat(3,1fr)" ,lg:"repeat(4,1fr)"}} gap="30px 20px" justifyContent="center" alignItems="center">
                        {skills.map((ele) => <SkillCard key={Math.random()} src={ele.src} name={ele.name} />)}
                    </Grid>
                </VStack>
            </Box>
        </div>
    )
}