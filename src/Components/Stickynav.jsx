import {
    Box, Flex, Image, Text, Input

} from "@chakra-ui/react"



import { useState, useRef } from "react"
import { Sale, SKINCARE } from "./Options"

import "./Navbar.css"
function StickyNav() {
    const [sty, setSty] = useState(true)
    const [sale, setSale] = useState(false)
    const [Skin, setSkin] = useState(false)
    const exampleRef = useRef(null);

    ;

    const cross = () => {

        setSty(false)

    }

    const ccd = () => {
        setSty(true)
    }

    const clickme = () => {
        exampleRef.current.style.top = "0";
    }


    return <div className="stick">

        <Flex mb="20px" w="100%" justifyContent="space-between" as="header" ref={exampleRef}
            onScrollCapture={clickme} >
            <Box className="Link" >
                <Text >SALE</Text>
            </Box>

            <Box >
                <Text ><SKINCARE /></Text>

            </Box>
            <Box className="">
                <Text><Sale /></Text>

            </Box>

            <Box className="Link">
                <Text>FRAGRANCE</Text>
            </Box>
            <Box className="Link">
                <Text>HAIRCARE</Text>
            </Box>
            <Box className="Link">
                <Text>HAIRCARE</Text>

            </Box>
            <Box className="Link">
                <Text>BRANDS</Text>
            </Box>
        </Flex>



    </div>


}



export default StickyNav