import {
    Box, Flex, Image, Text, Input

} from "@chakra-ui/react"

import {

    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    MenuOptionGroup,
    MenuOption,

    Button,
    useDisclosure,

} from '@chakra-ui/react'

import { ChevronDownIcon } from "@chakra-ui/icons"
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'
import { useState } from "react"
import { Sale, SKINCARE } from "./Options"
import { motion } from "framer-motion";
import "./Navbar.css"
function NavSea() {
    const [sty, setSty] = useState(true)
    const [sale, setSale] = useState(false)
    const [Skin, setSkin] = useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure();

    const cross = () => {

        setSty(false)

    }

    const ccd = () => {
        setSty(true)
    }



    return <Box>

        <Flex>

            <Box display="flex">

                <Box w="416px" h="100px" borderBottom=" 1px solid #cfcccc">
                    <Box >
                        <SearchIcon w="25px" h="20px" color="#f39" />
                        <Input fontSize="20px" ml="10px" border="none" w="332px" h="69px" type="search" placeholder="Search SEPHORA" onMouseEnter={cross} onMouseOut={ccd} >

                        </Input>


                        {sty ? <CloseIcon w="25px" h="20px" color="#f39" display="none" className="cros" onClick={cross}></CloseIcon> : <CloseIcon w="25px" h="20px" color="#f39" className="cros" onClick={cross}></CloseIcon>}

                    </Box>

                </Box>

                <Box w="530px" h="100px" >
                    <Image w="250px" src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png"></Image>
                </Box>
                <Box w="211px" display="flex" >

                    <Box w="60px" mt="30px">  <i className="fa-regular fa-heart fa-2x"></i></Box>

                    <Box w="60px" mt="30px"><i className="fa-solid fa-bag-shopping fa-2x"></i></Box>

                    <Box display="flex" w="90px" mt="30px"><i className="fa-solid fa-user fa-2x"></i><Text textAlign="center" fontSize="20px" mt="2px" ml="20PX">LOGIN</Text> </Box>
                </Box>


            </Box>



        </Flex >

        <Flex w="100%" justifyContent="space-between">
            <Box className="Link" >
                <Text >SALE</Text>
            </Box>
            <Box >


            </Box>
            <Box className="Link">
                <Text onMouseEnter={() => setSkin(true)} >SKINCARE</Text>
                {/* {Skin ? <SKINCARE onMouseEnter={() => setSale(true)} /> : null} */}
            </Box>
            <Box>
                <Menu>
                    <MenuButton>
                        Menu
                        <Text as="span" ml={2}>
                            ▾
                        </Text>
                    </MenuButton>
                    <MenuList w="100%"
                        h="500px">


                        <MenuItem

                            onHover={{
                                backgroundColor: "gray.200",
                                borderRadius: "md",
                            }}
                            _hover={{
                                backgroundColor: "gray.200",
                                borderRadius: "md",

                            }}
                            onMouseEnter={onOpen}
                        >
                            <Text fontWeight="bold"><Sale /></Text>
                            {isOpen && (
                                <Box
                                    backgroundColor="white"
                                    borderRadius="md"
                                    p={2}
                                    mt={1}
                                    boxShadow="sm"

                                    top="100%"
                                    left="0"
                                    display="block"
                                >

                                </Box>
                            )}
                        </MenuItem>
                    </MenuList>
                </Menu>

            </Box>

            <Box className="Link">
                <Text>FRAGRANCE</Text>
            </Box>
            <Box className="Link">
                <Text>HAIRCARE</Text>
            </Box>
            <Box className="Link">
                <Text>BRANDS</Text>
            </Box>
        </Flex>





        {Skin ? <SKINCARE /> : null}
    </Box >




}


export default NavSea