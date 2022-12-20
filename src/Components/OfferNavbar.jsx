
import { Box, Flex, Image, Text } from "@chakra-ui/react"

import "./Navbar.css"
function OffNavbar() {
    return (<div>
        <Box >

            <Box className="bgc">
                <Flex>
                    <Box>

                        <Flex> <Image w="110px" h="38px" src="https://i.ibb.co/0Gxb5Zg/nnnow-logo-1.jpg" ></Image>
                        </Flex>



                    </Box>

                    <Flex ml="8px" mt="10px" w="152px" h="60px" bg="" className="Location">
                        <Box mt="3px" mr="4px" > <i className="fa-solid fa-location-dot "></i>

                        </Box>  <Text>Store Locator</Text>
                    </Flex>



                    <Box w="140px" h="60px" >
                        <Flex mt="15px">   <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>

                        </Flex>
                    </Box>
                    <Box ><Text fontSize="lg">Get 10% OFF on your purchase. Use Code:<br /> BEAUTY10</Text></Box>

                    <Box w="140px" h="60px">
                        <Flex mt="13px" ml="50px">   <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>

                        </Flex>
                    </Box>

                    <Flex ml="70px" className="fgh" >
                        <Box mt="13px" ml="5px">
                            <Flex>
                                <Box><i className="fa-solid fa-download"></i></Box>
                                <Box ml="10px"><Text>GetApp</Text></Box>
                            </Flex>
                        </Box>

                        <Box mt="13px" ml="50px">
                            <Flex>
                                <Box ml="10px"><i className="fa-solid fa-box-open"></i></Box>
                                <Box ml="10px"><Text>Track Order</Text></Box>
                            </Flex>
                        </Box>

                        <Box mt="13px" ml="50px">
                            <Flex>
                                <Box><i className="fa-solid fa-trophy"></i></Box>
                                <Box ml="10px"><Text>GetApp</Text></Box>
                            </Flex>
                        </Box>

                    </Flex>



                </Flex>
            </Box>


        </Box>




    </div >

    )
}

export default OffNavbar