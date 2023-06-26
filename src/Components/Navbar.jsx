import style from "../Style/Navbar.module.css";
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
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import resume from "../Docs/Aniket_Ghormare_Resume.pdf";

const Navbar = () => {
  return (
    <div>
      <Box id="nav-menu" className={style.navbar}>
        <Flex justifyContent="space-between" alignContent="center">
          <Box ml="20px">
            <Heading>Aniket Ghormare</Heading>
          </Box>
          <Box id={style.normal}>
            <HStack gap="30px" fontSize="20px">
              <Box>
                <Link className="nav-link home" href="#home">
                  Home
                </Link>
              </Box>
              <Box>
                <Link className="nav-link about" href="#about">
                  About Me
                </Link>
              </Box>
              <Box>
                <Link className="nav-link skills" href="#skills">
                  Skills
                </Link>
              </Box>
              <Box>
                <Link className="nav-link projects" href="#projects">
                  Project
                </Link>
              </Box>
              <Box>
                <Link className="nav-link contact" href="#contact">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link className="nav-link resume" href={resume} download>
                  <Button
                    id="resume-button-1"
                    color="#3e2723"
                    bgColor="rgb(232,118,118)"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/13foJs_pga6A6vF-wAl1gQ8jLGi3Ud1gd/view?usp=sharing"
                      )
                    }
                  >
                    Resume
                  </Button>
                </Link>
              </Box>
            </HStack>
          </Box>
          <Box id={style.hamburger}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon color="#05386B" />}
              />
              <MenuList bgColor="#ff7043" textAlign="center" closeOnSelect>
                <MenuItem
                  bgColor="#ff7043"
                  // className="nav-link home"
                  color="#3e2723"
                >
                  <Link href="#home">Home</Link>
                </MenuItem>
                <MenuItem
                  bgColor="#ff7043"
                  // className="nav-link about"
                  color="#3e2723"
                >
                  <Link href="#about">About Me</Link>
                </MenuItem>
                <MenuItem
                  bgColor="#ff7043"
                  // className="nav-link skills"
                  color="#3e2723"
                >
                  <Link href="#skills">Skills</Link>
                </MenuItem>
                <MenuItem
                  bgColor="#ff7043"
                  // className="nav-link projects"
                  color="#3e2723"
                >
                  <Link href="#projects">Project</Link>
                </MenuItem>
                <MenuItem
                  bgColor="#ff7043"
                  // className="nav-link contact"
                  color="#3e2723"
                >
                  <Link href="#contact">Contact</Link>
                </MenuItem>
                <MenuItem bgColor="#ff7043">
                  <Link href={resume} download>
                    <Button
                      // id="resume-button-1"
                      color="#3e2723"
                      bgColor="#ffe0b2"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/13foJs_pga6A6vF-wAl1gQ8jLGi3Ud1gd/view?usp=sharing"
                        )
                      }
                    >
                      Resume
                    </Button>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
      <Box h="80px"></Box>
    </div>
  );
};

export default Navbar;