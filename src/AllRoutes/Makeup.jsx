import Navbar from "./Navbar"
import Footer from "./Footer"
import { Box, Flex, Text } from "@chakra-ui/react"
import axios from "axios"
import { useState, useEffect } from "react"
import "./Home.css"
import {
    Checkbox, CheckboxGroup, Stack, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"
function MakeupProducts() {
    const [data, setData] = useState([]);

    const getData = () => {

        axios.get(`https://sephora-mock.onrender.com/foundation`)

            .then((res) => {
                console.log(res.data);
                setData(res);
            })
    }

    useEffect(() => {
        getData()
    }, [])


    return <div className="makeup" >
        <Navbar />
        <Box mt="20px" h="20px"><Text textAlign="left">SEPHORA/Makeup/Face Makeup  / Face Foundation Cream</Text></Box>
        <Flex mt="20px">
            <Box w="200px">
                <Box>CATEGORY</Box>

                <Stack spacing={[1, 5]} direction={['column']}>
                    <Checkbox size='sm' colorScheme='#f39'>
                        Foundation (531)
                    </Checkbox>

                    <Checkbox size='sm' colorScheme='#f39'>
                        New Arrivals (31)
                    </Checkbox>
                    <Checkbox size='sm' colorScheme='#f39'>
                        On Sale (227)
                    </Checkbox>


                </Stack>

                <Box display="grid" direction="column">
                    <Menu>
                        {({ isOpen }) => (
                            <>
                                <MenuButton w="150px" isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                                    {isOpen ? 'BRAND' : 'BRAND'}
                                </MenuButton>
                                <MenuList border="none">
                                    <MenuItem>sephora Collection</MenuItem>
                                    <MenuItem>MAC Cosmentic</MenuItem>
                                    <MenuItem>HUDA BEAUTY</MenuItem>
                                    <MenuItem>TOo Faced</MenuItem>
                                    <MenuItem>Bobbi Brown</MenuItem>
                                </MenuList>
                            </>
                        )}
                    </Menu>

                    <Menu>
                        <MenuButton w="150px" as={Button} rightIcon={<ChevronDownIcon />}>
                            Size
                        </MenuButton>
                    </Menu>

                    <Menu>
                        <MenuButton w="150px" as={Button} rightIcon={<ChevronDownIcon />}>
                            Color
                        </MenuButton>
                    </Menu>
                    <Menu>
                        <MenuButton w="150px" as={Button} rightIcon={<ChevronDownIcon />}>
                            Promotion
                        </MenuButton>
                    </Menu>

                    <Menu>
                        <MenuButton w="150px" as={Button} rightIcon={<ChevronDownIcon />}>
                            Price
                        </MenuButton>
                    </Menu>
                </Box>
            </Box>
        </Flex>
    </div>


}

export default MakeupProducts