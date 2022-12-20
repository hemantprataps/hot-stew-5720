import Navbar from "./Navbar"
import Footer from "./Footer"
import { Box, Flex, Grid, GridItem, Select, Text } from "@chakra-ui/react"
import axios from "axios"
import { useState, useEffect } from "react"
import "./Home.css"
import {
    Checkbox, Stack,
    Image,

} from '@chakra-ui/react'
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { ChevronDownIcon } from "@chakra-ui/icons"
function Sale() {
    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [text, setText] = useState(searchParams.get("q" || ""));

    const getData = () => {

        axios.get(`https://sephora-mock.onrender.com/offer`)

            .then((res) => {
                console.log("sale", res.data);
                setData(res.data);
            })
    }

    useEffect(() => {
        getData()
        setSearchParams({ q: text });
    }, [])


    return <div className="makeup" >
        <Navbar />
        <Box mt="20px" h="20px"><Text textAlign="left">SEPHORA / Sale</Text></Box>
        <Flex mt="20px">
            <Box w="200px">
                <Box className="bb">CATEGORY</Box>

                <Stack spacing={[1, 5]} direction={['column']}>
                    <Checkbox size='sm' colorScheme="red" >
                        Foundation (531)
                    </Checkbox>

                    <Checkbox size='sm' colorScheme='green'>
                        New Arrivals (31)
                    </Checkbox>
                    <Checkbox size='sm' colorScheme='#f39'>
                        On Sale (227)
                    </Checkbox>


                </Stack>

                <Box mt="20px" display="grid" direction="column">
                    <select >




                        <option>sephora Collection</option>
                        <option>MAC Cosmentic</option>
                        <option>HUDA BEAUTY</option>
                        <option>TOo Faced</option>
                        <option>Bobbi Brown</option>



                    </select>


                </Box>
            </Box>

            <Box>
                <Box display="flex" className="rrrr" justifyContent="right"> <select >

                    <option>Sort</option>
                    <option>Popularity</option>
                    <option>Newest</option>
                    <option>High To Low</option>
                    <option>Low To High</option>
                    <option></option>

                </select> </Box>
                <Grid w="300px" templateColumns='repeat(3, 1fr)' gap={6}>
                    {data.map((e, i) => <GridItem key={i}>
                        <Link to={`/sale/${e.id}`}>
                            <Image w="300px" h="408px" src={e.id3} />
                            <br />
                            <Flex justifyContent='center'><Image src={e.nwc_img_src} />Offer</Flex>
                            <h3 className="sfn">{e.nw_productview_brandtxt}</h3>
                            <p className="sp">{e.id4}</p>
                            <h3 className="sfn">{`Rs.${e.nw_priceblock_amt}`}</h3>
                        </Link>
                    </GridItem>)}
                </Grid>
            </Box>
        </Flex>
        <Footer></Footer>
    </div>


}

export default Sale