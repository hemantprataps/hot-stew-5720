
import { Box, Flex, Image, Text } from "@chakra-ui/react"


function OffNavbar() {
    return (<div>
        <Box >

            <Box>
                <Flex>
                    <Box>

                        <Flex> <Image src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png" ></Image>
                        </Flex>



                    </Box>

                    <Box w="152px" h="60px" bg="red" className="Location"> <Text>location</Text></Box>



                    <Box w="152px" bg="black" h="60px"></Box>
                    <Box ><Text fontSize="lg">Get 10% OFF on your purchase. Use Code:<br /> BEAUTY10</Text></Box>
                    <Box w="152px" h="60px" bg="black"></Box>

                    <Box>
                        <Flex>
                            <Box>logo</Box>
                            <Box><Text>GetApp</Text></Box>
                        </Flex>
                    </Box>

                    <Box>
                        <Flex>
                            <Box>logo</Box>
                            <Box><Text>GetApp</Text></Box>
                        </Flex>
                    </Box>

                    <Box>
                        <Flex>
                            <Box>logo</Box>
                            <Box><Text>GetApp</Text></Box>
                        </Flex>
                    </Box>

                </Flex>
            </Box>


        </Box>




    </div>

    )
}

export default OffNavbar