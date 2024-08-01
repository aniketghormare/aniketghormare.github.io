import { Box, Grid, Heading, VStack } from "@chakra-ui/react";
import netlify_logo from "../assets/netlify_logo.png"
import SkillCard from "../Skills/SkillCard";
export default function Tools() {
    const tools = [
        {
            src : "https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2022/03/cypress.png?fit=364%2C364&ssl=1",
            name : "Cypress",
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
        },
        {
            src : "https://assets.vercel.com/image/upload/front/favicon/vercel/152x152.png",
            name : "Vercel",
        },
        {
            src : "https://cdn-icons-png.flaticon.com/512/460/460989.png",
            name : "Json server",
        },
        {
            src : "https://cdnlogo.com/logos/p/20/postman.svg",
            name : "Postman",
        },
        {
            src : netlify_logo,
            name : "Netlify",
        }
       
    ]

    return (
        <div>
            <Box id="skills" w="80%" m="auto" mt="5%" p="30px">
                <VStack>
                    <Heading _hover={{textDecoration:"underline"}} textDecoration="none" color="rgb(210, 226, 167)" mb="5%">TOOLS</Heading>
                    <Grid templateColumns={{base: "repeat(2,1fr)", sm: "repeat(2,1fr)", md: "repeat(3,1fr)" ,lg:"repeat(4,1fr)"}} gap="30px 20px" justifyContent="center" alignItems="center">
                        {tools.map((ele) => <SkillCard key={Math.random()} src={ele.src} name={ele.name} />)}
                    </Grid>
                </VStack>
            </Box>
        </div>
    )
}