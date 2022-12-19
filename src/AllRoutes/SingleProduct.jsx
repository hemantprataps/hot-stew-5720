import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Home.css"
function SingleProduct() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({});

    const getData = () => {
        axios.get(`https://sephora-mock.onrender.com/foundation/${id}`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return <div>
        <Navbar></Navbar>
        <Flex>
            <Box w="70%" >
                <Box>
                    <Image src={data.id3} />

                </Box>

                <Flex className="ffl">

                    <Flex className="bgg" h="84px" w="350px">
                        <Box mt="8px" w="50px" h="50px"> <Image src="https://static.nnnow.com/client/assets/images/pdp/pdp_non_returnable_logo.png" /></Box>

                        <Box>
                            <Text fontWeight="bold">RETURN POLICY ON THIS ITEM</Text>
                            <Text>This item is non-returnable.</Text>
                        </Box>
                    </Flex>

                    <Box className="bggg" h="84px" w="384px">

                    </Box>


                </Flex>
            </Box>
            <Box mt="50px">
                <Box W="70%">
                    <Box><Image src={data.nwc_img_src
                    } />OFFER</Box>
                    <Box><h3>{data.nw_productview_brandtxt
                    }</h3></Box>
                    <Box><Text>{data.id4}</Text></Box>
                    <Box><Text fontWeight="bold">{data.nw_priceblock_amt}</Text></Box>
                </Box>
                <Flex >
                    <label className="leb">OFFER:</label>
                    <ul className="uu">
                        <li>
                            <Text className="smm"> BUY WORTH 5,000 FROM SEPHORA COLLECTION AND GET A POUCH WITH 3 DELUXE SAMPLES :FREESEP5000</Text>
                            <Text color="#f39" fontSize="10px" >OTHER ELIGIBLE PRODUCTS</Text>

                        </li>


                        <li>
                            <Text className="smm">  BUY WORTH 7000 GET A MAKEUP BRUSH SPINNER :FREESEP7000</Text>
                            <Text color="#f39" fontSize="10px" >OTHER ELIGIBLE PRODUCTS</Text>

                        </li>

                        <li>
                            <Text className="smm">  BUY WORTH 10000 FROM SEPHORA & EXCLUSIVES AND GET A GUA SHA ROLLER :FREESEP10000</Text>
                            <Text color="#f39" fontSize="10px" >OTHER ELIGIBLE PRODUCTS</Text>

                        </li>

                        <li>
                            <Text className="smm">  BUY WORTH 5,000 FROM SEPHORA COLLECTION AND GET A POUCH WITH 3 DELUXE SAMPLES : FREESEP5000</Text>
                            <Text color="#f39" fontSize="10px" >OTHER ELIGIBLE PRODUCTS</Text>

                        </li>
                    </ul>


                </Flex>
                <Box><Button className="bagBtn"> ADD TO BAG</Button></Box>
            </Box>
        </Flex>


    </div>


}

export default SingleProduct