import {
    Box, List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Flex,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    MenuOptionGroup,
    MenuOption,
    Text,
    Button,
    useDisclosure,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

import "./Navbar.css"
export const Sale = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return <div>
        <div className="dropdown">
            <button className="dropbtn">SKINCARE</button>
            <div className="dropdown-content">
                <Box w="90%" >

                    <Flex justifyContent="space-evenly">
                        <List ml="-100px">

                            <Table>
                                <ListItem className="Bold">FACE</ListItem>
                                <ListItem>BB & CC Cream</ListItem>
                                <ListItem>ConCealer</ListItem>
                                <ListItem>Face Primer</ListItem>
                                <ListItem>Highlighter</ListItem>
                                <ListItem>Face Brushes</ListItem>
                                <ListItem>Makeup Palette</ListItem>

                            </Table>

                        </List>

                        <List>
                            <ListItem className="Bold">Eye</ListItem>
                            <ListItem>Mascara</ListItem>
                            <ListItem>Eyeliner</ListItem>
                            <ListItem>Eyebrow</ListItem>
                            <ListItem>Eye Primer</ListItem>
                            <ListItem>Eyeshadow</ListItem>
                            <ListItem>Eye Brushes</ListItem>
                            <ListItem>Contact Lenses</ListItem>

                        </List>

                        <List>
                            <ListItem className="Bold">LIP</ListItem>
                            <ListItem>Lipstick</ListItem>
                            <ListItem>Lip Stain</ListItem>
                            <ListItem>Lip Liner</ListItem>
                            <ListItem>Lip Bal & Treatment</ListItem>
                            <ListItem>Lip Brushes</ListItem>
                            <ListItem>fsk</ListItem>
                            <ListItem>fsk</ListItem>

                        </List>

                        <List>
                            <ListItem className="Bold">CHEEK</ListItem>
                            <ListItem>Blush</ListItem>
                            <ListItem>Bronzer</ListItem>
                            <ListItem>Highlighter</ListItem>
                            <ListItem>Face Oils</ListItem>


                        </List>

                        <List>
                            <ListItem className="Bold">NAIL MAKEUP</ListItem>
                            <ListItem>Nail Polish</ListItem>
                            <ListItem>Nail Care</ListItem>
                            <ListItem>Manicure & Pedicure Tools</ListItem>
                            <ListItem>Face Oils</ListItem>


                        </List>

                    </Flex>
                    <Box>
                        <List>
                            <ListItem className="Bold">MAKEUP ACCESSORIES</ListItem>
                            <ListItem>Tweezers & Eyebrow Tools</ListItem>
                            <ListItem>Makeup Removers</ListItem>
                            <ListItem>Sponges & Applcatiors</ListItem>
                            <ListItem>Makeup Bags & Travel Cases</ListItem>


                        </List>
                    </Box>

                </Box>
            </div>
        </div>
    </div>




}


export const SKINCARE = () => {

    return <div>

        <div className="dropdown">
            <button className="dropbtn">Makeup</button>
            <div className="dropdown-content">
                <Box w="90%" >

                    <Flex justifyContent="space-evenly">
                        <List ml="-100px">

                            <Table>
                                <ListItem className="Bold">MOISTURIZERS</ListItem>
                                <ListItem>Night Creame</ListItem>
                                <ListItem>ConCealer</ListItem>
                                <ListItem>Mists & Essences</ListItem>
                                <ListItem>BB & CC Creams</ListItem>


                            </Table>

                        </List>

                        <List>
                            <ListItem className="Bold">CLEANSERS</ListItem>
                            <ListItem>Face Wash & Cleansers</ListItem>
                            <ListItem>Eyeliner</ListItem>
                            <ListItem>Makeup Removers</ListItem>
                            <ListItem>Face Wipes</ListItem>
                            <ListItem>Toners</ListItem>


                        </List>

                        <List>
                            <ListItem className="Bold">LIP</ListItem>
                            <ListItem>Lipstick</ListItem>
                            <ListItem>Lip Stain</ListItem>
                            <ListItem>Lip Liner</ListItem>
                            <ListItem>Lip Bal & Treatment</ListItem>
                            <ListItem>Lip Brushes</ListItem>
                            <ListItem>fsk</ListItem>
                            <ListItem>fsk</ListItem>

                        </List>

                        <List>
                            <ListItem className="Bold">TREATMENTS & HIGH TECH TOOLS</ListItem>
                            <ListItem>Face Serums</ListItem>
                            <ListItem>Cleaning Tools</ListItem>
                            <ListItem>Eye Creams & Treatments</ListItem>



                        </List>

                        <List>
                            <ListItem className="Bold">MASKS</ListItem>
                            <ListItem>Face Maskes</ListItem>
                            <ListItem>Sheet Masks</ListItem>
                            <ListItem>Eye Masks</ListItem>
                            <ListItem>Nose Masks & Strips</ListItem>

                            <ListItem>Lip Masks</ListItem>
                            <ListItem>Hair Masks</ListItem>
                            <ListItem>Hand Masks</ListItem>
                            <ListItem>Foot Masks</ListItem>


                        </List>

                    </Flex>
                    <Flex>
                        <List>
                            <ListItem className="Bold">BATH & SHOWER</ListItem>
                            <ListItem>Body Wash and Shower Gel</ListItem>
                            <ListItem>Scrub and Exfoliants</ListItem>
                            <ListItem>Exfolitors</ListItem>



                        </List>



                        <List>
                            <ListItem className="Bold">BODY MOISTURIZERS</ListItem>
                            <ListItem>Body Lotions & Body Oils</ListItem>
                            <ListItem>Hand Creame & Foot Creams</ListItem>




                        </List>
                    </Flex>

                </Box>
            </div>
        </div>
    </div>

}


