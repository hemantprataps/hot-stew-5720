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
function StickyNav() {
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

    return <div className="stick">

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

    </div>


}



export default StickyNav