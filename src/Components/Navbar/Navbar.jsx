import style from "./Navbar.module.css";
import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import resume from "../assets/Aniket_Ghormare_Resume.pdf";

const Navbar = () => {
  const handleClick = () => {
    fetch(resume)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const aLink = document.createElement('a');
        aLink.href = fileURL;
        aLink.download = 'Aniket_Ghormare_Resume.pdf';
        document.body.appendChild(aLink); // Append to body
        aLink.click();
        document.body.removeChild(aLink); // Clean up
      })
      .catch((error) => {
        console.error('Error fetching or downloading the PDF:', error);
      });
  };

  return (
    <Box id="nav-menu" className={style.navbar}>
      <Flex justifyContent="space-between" alignContent="center">
        <Box ml="20px">
          <Heading>Aniket Ghormare</Heading>
        </Box>
        <Box id={style.normal}>
          <HStack gap="30px" fontSize="20px">
            <Box>
              <Link className="nav-link home" href="#home">
                HOME
              </Link>
            </Box>
            <Box>
              <Link className="nav-link about" href="#about">
                ABOUT
              </Link>
            </Box>
            <Box>
              <Link className="nav-link experience" href="#experience">
                EXPERIENCE
              </Link>
            </Box>
            <Box>
              <Link className="nav-link skills" href="#skills">
                SKILLS
              </Link>
            </Box>
            <Box>
              <Link className="nav-link projects" href="#projects">
                PROJECTS
              </Link>
            </Box>
            <Box>
              <Link className="nav-link contact" href="#contact">
                CONTACT
              </Link>
            </Box>
            <Box>
              <a href="https://drive.google.com/file/d/1JMWYYCIRBcoKpQ-dDhK9s1D9sDshnXTy/view" target="_blank">
              <Button
                bgColor="rgb(71, 105, 133)"
                color="#e9c6c6"
                p="5px 25px"
                fontSize="1em"
                _hover={{
                  bgColor: "rgb(33, 105, 163)",
                  color: "#ebc9c9",
                  fontSize: "1em",
                  p: "5px 25px"
                }}
                onClick={handleClick}
              >
                Resume
              </Button>
              </a>
            </Box>
          </HStack>
        </Box>
        <Box id={style.hamburger}>
          <Menu bgColor="rgb(2, 28, 85)">
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon color="#05386B" />}
            />
            <MenuList gap="5px" textAlign="center" closeOnSelect>
              <MenuItem
                bgColor="rgb(13, 25, 51)"
                color="#e2dede"
                fontWeight="bold"
                mt="-10px"
              >
                <Link href="#home">HOME</Link>
              </MenuItem>
              <MenuItem
                bgColor="rgb(13, 25, 51)"
                color="#e2dede"
                fontWeight="bold"
              >
                <Link href="#about">ABOUT</Link>
              </MenuItem>
              <MenuItem
                bgColor="rgb(13, 25, 51)"
                fontWeight="bold"
                color="#e2dede"
              >
                <Link href="#experience">EXPERIENCE</Link>
              </MenuItem>
              <MenuItem
                bgColor="rgb(13, 25, 51)"
                fontWeight="bold"
                color="#e2dede"
              >
                <Link href="#skills">SKILLS</Link>
              </MenuItem>
              <MenuItem
                bgColor="rgb(13, 25, 51)"
                color="#e2dede"
                fontWeight="bold"
              >
                <Link href="#projects">PROJECTS</Link>
              </MenuItem>
              <MenuItem
                bgColor="rgb(13, 25, 51)"
                fontWeight="bold"
                color="#e2dede"
              >
                <Link href="#contact">CONTACT</Link>
              </MenuItem>
              <MenuItem mb="-8px" bgColor="rgb(13, 25, 51)" fontWeight="bold">
                <Button
                  bgColor="rgb(71, 105, 133)"
                  color="#e9c6c6"
                  p="5px 25px"
                  fontSize="1em"
                  _hover={{
                    bgColor: "rgb(33, 105, 163)",
                    color: "#ebc9c9",
                    p: "5px 25px",
                    fontSize: "1em"
                  }}
                  onClick={handleClick}
                >
                  Resume
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
