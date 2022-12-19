import Navbar from "./Navbar"
import { Box, Image, Flex, Link, } from "@chakra-ui/react"
import "./Home.css"
import axios from "axios"
function Products() {



    return <div>
        <Navbar />
        <Box mt="50px"> <Image w="90%" h="295px" src="https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/MakeupDesktop.jpg" /></Box>

        <Flex w="90%" m="auto" mt="30px">
            <Box w="307px" h="312px">
                <Box className="fn"><h3  >Shop</h3></Box>
                <ul className="dot">
                    <li><Link>
                        FACE
                    </Link></li>
                    <li>
                        <Link>
                            CHEEK
                        </Link>
                    </li>
                    <li><Link>
                        EYE
                    </Link></li>
                    <li>
                        <Link>
                            LIP
                        </Link>
                    </li>
                    <li>
                        <Link>
                            BRUSHES & APPLICATORS
                        </Link>
                    </li>
                    <li>
                        <Link>
                            ACCESSORIES
                        </Link>

                    </li>
                    <li>
                        <Link>
                            NAIL
                        </Link>
                    </li>
                    <li>
                        <Link>
                            MAKEUP PALETTES
                        </Link>
                    </li>
                    <li>
                        <Link>
                            VEGAN
                        </Link>
                    </li>
                </ul>
            </Box>

            <Box>
                <Box> <Image w="900px" h="60px" src="https://logan.nnnow.com/content/dam/nnnow-project/16-april-2020/makeup/13APR20_MAKEUP_CB_STRIP1_DESK_1.jpg" /></Box>

                <Box>



                </Box>
            </Box>
        </Flex>



    </div>

}

export default Products