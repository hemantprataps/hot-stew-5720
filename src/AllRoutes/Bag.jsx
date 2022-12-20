

import { useParams, useNavigate, json } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Home.css"
function Bag({ data }) {


    console.log("data", data)


    const navigate = useNavigate();
    const [ddata, setData] = useState({});
    const product = (localStorage.getItem("product"))
    console.log(product.id)
    const postData = () => {

        axios.post('https://sephora-mock.onrender.com/login', {
            id: product.id,
            img: product.id3,
            tit: product.nw_productview_brandtxt,
            amt: product.nw_priceblock_amt



        })
            .then((res) => {
                console.log(res.data);
                setData(res.data);

            })
    }






    const getData = () => {

        axios.get('https://sephora-mock.onrender.com/login', {
            product


        })
            .then((res) => {
                console.log(res.data);


            })
    }


    useEffect(() => {
        // postData()
        // getData()
    }, [])


    return <div>


    </div>


}

export default Bag