import { Grid, GridItem, Image, Box, Flex, Link, Text, Button, Input } from '@chakra-ui/react'
import { Fragment } from 'react';
// import ScrollButton from './components/TopButton';
// import { Content, Heading } from './components/Styles';
import Navbar from './Navbar';
import "./Home.css"
import Footer from './Footer';
function Home() {

    return (<div position="realtive">
        <Navbar />
        <Fragment>
            <div id="demo" className="carousel slide" data-ride="carousel">

                {/* <!-- Indicators --> */}
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>

                {/* <!-- The slideshow --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/ABH_Christmas.jpg" alt="Los Angeles" width="1100" height="500" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://logan.nnnow.com/content/dam/nnnow-project/13-dec-2022/1125X500_HPBanner_Web35LM.jpg" alt="Chicago" width="1100" height="500" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/SC_HPBanner_Desktop.jpg" alt="New York" width="1100" height="500" />
                    </div>


                    <div className="carousel-item">
                        <img src="https://logan.nnnow.com/content/dam/nnnow-project/29-nov-2022/se/L'Ateilier_Topbannerdesktop.jpg" alt="New York" width="1100" height="500" />
                    </div>

                    {/* <div className="carousel-item">
                    <img src="" alt="New York" width="1100" height="500" />
                </div> */}
                </div>

                {/* <!-- Left and right controls --> */}
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>

            <Grid m="auto" mt="50px" w="100%" templateColumns='repeat(6, 1fr)' gap={6}>
                <GridItem h='60px' w='174px' bg='blue' ><Image w="174px" h="60px" src='https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q1.jpg' /> </GridItem>
                <GridItem h='60px' w='174px' bg='blue' >
                    <Image w="174px" h="60px" src='https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q2.jpg' />
                </GridItem>
                <GridItem h='60px' w='174px' bg='blue' >
                    <Image w="174px" h="60px" src='https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q3.jpg' />
                </GridItem>
                <GridItem h='60px' w='174px' bg='blue' >
                    <Image w="174px" h="60px" src='https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q3.jpg' />
                </GridItem>
                <GridItem h='60px' w='174px' bg='blue' >
                    <Image w="174px" h="60px" src='https://logan.nnnow.com/content/dam/nnnow-project/25-march-2021/25MAR21_SEPHORA_BP_DESK_Q5.jpg' />
                </GridItem>
                <GridItem h='60px' w='174px' bg='blue' >
                    <Image w="174px" h="60px" src="https://logan.nnnow.com/content/dam/nnnow-project/08-may-2021/7MAY21_SEPHORA_BP_Q6.jpg" />
                </GridItem>
            </Grid>
            <Box>


                <Image w="1181px" h="86px" src='https://logan.nnnow.com/content/dam/nnnow-project/07-nov-2022/Header_Desk.jpg' />
            </Box>

            <Box>
                <Image w="1181px" h="187px" src='https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/TomFord_BOTWstrip_Desktop.jpg' />
            </Box>

            <Grid m="auto" mt="50px" w="100%" templateColumns='repeat(3, 1fr)' gap={6}>

                <GridItem>
                    <Image w="379px" h="380px" src='https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/TomFord_Tile_01.jpg' />
                </GridItem>

                <GridItem>
                    <Image w="379px" h="380px" src='https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/TomFord_Tile_02.jpg' />
                </GridItem>
                <GridItem>
                    <Image w="379px" h="380px" src='https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/TomFord_Tile_03.jpg' />
                </GridItem>
            </Grid>

            <Box>
                <Image h='85px' src='https://logan.nnnow.com/content/dam/nnnow-project/16-march-2022/justlanded.jpg' />
            </Box>


            <Flex w="90%" m="auto" mb="100px">

                <Box w="50%" h="433px">
                    <Image w="500px" h="318px" src="https://logan.nnnow.com/content/dam/nnnow-project/16-dec-2022/Tile2.png" />
                </Box>
                <Box w="50%" h="433px">
                    <Link>
                        <Image src='https://logan.nnnow.com/content/dam/nnnow-project/04-nov-2022/MO_Video_SS.jpg' />
                    </Link>
                    <Box mt="30px"> <Text>Explore MoroccanOil Body</Text></Box>
                </Box>
            </Flex>
            <Box>
                <Image w="1181px" h="110px" src='https://logan.nnnow.com/content/dam/nnnow-project/22-march-2022/Loyalty_Strip_Desk.jpg'></Image>


                <Image w="1181px" h="86px" src="https://logan.nnnow.com/content/dam/nnnow-project/05-nov-2022/Sephora_HeaderStrip_LazyGirl'sBFFstext(1).jpg" />
            </Box>

            <Flex>
                <Grid m="auto" mt="50px" w="100%" templateColumns='repeat(3, 1fr)' >

                    <GridItem>
                        <Image w="375px" h="395px" src="https://logan.nnnow.com/content/dam/nnnow-project/05-nov-2022/se/Sephora_ContentP-Story_CreamyConcealers.jpg" />
                    </GridItem>
                    <GridItem>
                        <Image w="375px" h="395px" src="https://logan.nnnow.com/content/dam/nnnow-project/05-nov-2022/se/Sephora_ContentP-Story_TrendingTints.jpg" />
                    </GridItem>
                    <GridItem>

                        <Image w="375px" h="395px" src="https://logan.nnnow.com/content/dam/nnnow-project/05-nov-2022/se/Sephora_ContentP-Story_MagicalMascaras.jpg" />
                    </GridItem>

                </Grid>

            </Flex>

            <Box>
                <Image w="1181px" h="85px" src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_4_DESK.jpg" />
            </Box>


            <Flex>
                <Grid m="auto" mt="50px" w="100%" templateColumns='repeat(6, 1fr)' >

                    <GridItem>
                        <Image w="174px" h="72px" src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/scdsk.jpeg" />
                    </GridItem>
                    <GridItem>
                        <Image w="174px" h="72px" src="https://logan.nnnow.com/content/dam/nnnow-project/11-oct-2021-/12OCT21-TILE-MUFE(1).jpg" />
                    </GridItem>
                    <GridItem>

                        <Image w="174px" h="72px" src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/bendsk.jpg" />
                    </GridItem>

                    <GridItem>
                        <Image w="174px" h="72px" src="https://logan.nnnow.com/content/dam/nnnow-project/05-jan-2022/TF_Logo(1).jpg" />
                    </GridItem>
                    <GridItem>
                        <Image w="174px" h="72px" src="https://logan.nnnow.com/content/dam/nnnow-project/03-jan-2022/se/Lancome_Logo(1).jpeg" />
                    </GridItem>
                    <GridItem>

                        <Image w="174px" h="72px" src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/HDdesk.jpg" />
                    </GridItem>

                </Grid>

            </Flex>


            <Box>
                <Image w="1181px" h="85px" src='https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_5_DESK.jpg' />
            </Box>


            <Flex>
                <Grid m="auto" mt="50px" w="100%" templateColumns='repeat(3, 1fr)'>

                    <GridItem><Image w="379px" h="233px" src="https://logan.nnnow.com/content/dam/nnnow-project/13-oct-2022/SC_NOTB.jpg" /></GridItem>
                    <GridItem><Image w="379px" h="233px" src="https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_BigByDefinitionMascara.jpg" /></GridItem>
                    <GridItem><Image w="379px" h="233px" src="https://logan.nnnow.com/content/dam/nnnow-project/12-dec-2022/se/HomepageNewontheBlockBanner1659X1020.png" /></GridItem>

                </Grid>
            </Flex>


            <Flex>
                <Grid m="auto" mt="20px" w="100%" templateColumns='repeat(3, 1fr)'>
                    <GridItem><Image w="379px" h="233px" src="https://logan.nnnow.com/content/dam/nnnow-project/27-nov-2022/se/Smashbox_NOTB.jpg" /></GridItem>
                    <GridItem><Image w="379px" h="233px" src="https://logan.nnnow.com/content/dam/nnnow-project/31-oct-2022/ABH_NOTB_RoseMetalsPallete.jpg" /></GridItem>
                    <GridItem><Image w="379px" h="233px" src="https://logan.nnnow.com/content/dam/nnnow-project/14-sep-2022/Hudabeauty_NOTB.jpg" /></GridItem>
                </Grid>
            </Flex>

            <Box>
                <Image mt="30px" mb="30px" h="85.68px" src="https://logan.nnnow.com/content/dam/nnnow-project/01-oct-2020/sephora/2OCT20_PREHEADER_7_DESK.jpg" />
            </Box>

            <Flex>
                <Grid m="auto" mt="20px" w="100%" templateColumns='repeat(3, 1fr)'>
                    <GridItem><Image w="379px" h="379px" src="https://logan.nnnow.com/content/dam/nnnow-project/23-march-2022/se-blog/Sephora_MakingaLook_BlogCoverTileOption02.jpg" /></GridItem>
                    <GridItem><Image w="379px" h="379px" src="https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG3.jpg" /></GridItem>
                    <GridItem><Image w="379px" h="379px" src="https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG4.jpg" /></GridItem>
                </Grid>
            </Flex>
            <Box> <Button>Back To top</Button></Box>

            <Footer />
        </Fragment>
    </div>

    )

}


export default Home