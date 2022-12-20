import { Grid, GridItem, Image, Box, Flex, Link, Text, Button, Input } from '@chakra-ui/react'
import "./Home.css"
function Footer() {
    return <div>
        <Box bg="#f2f2f2" h="148px">
            <h3 className='h3'>GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION</h3>
            <Flex className='emailDiv'>
                <Input placeholder='Enter your email address' className='inpute'></Input>
                <Button className='btn'>SUBSCRIBE</Button>
            </Flex>
        </Box>
        <Box className='footerDoc'>

            <h2 className='h2footer'>Sephora online India is a trailblazer in the Indian beauty scene</h2>

            <Box className='bxt'>
                <p>
                    A leader in luxury beauty and skincare, our purpose at Sephora online India is to create an inviting online beauty shopping experience and inspire fearlessness in our community. Since the Sephora India launch in 2013, we have been an industry-leading champion of diversity, and empowerment, guided by our longstanding company values.
                </p>

                <br />
                <br />
                <h2>
                    Discover who we are and what we entail only on NNNOW.com
                </h2>
                <p>
                    \nOwned by LVMH Moet Hennessy Louis Vuitton, the world's leading luxury goods group, Sephora was founded in France by Dominique Mandonnaud in 1970 and is defined by its unique, open-sell environment with an ever-increasing assortment of best-selling lipsticks, eyeliners, foundations, eye palettes and more from carefully curated brands such as Make Up For Ever, Estee Lauder, Benefit Cosmetics, Huda Beauty and many more.

                </p>
                <br />
                <br /> <br />
                <h2>Shop Our unrivalled range of Sephora products for a more beautiful you</h2>
                <p>\nOur array on Sephora NNNOW features trusted classics from Pixi, Elizabeth Arden, Anastasia Beverly Hills, Clinique, Tom Ford, and Sephora’s own, SEPHORA COLLECTION. Today, Sephora India online is a powerful beauty presence in the digital space, thanks to its unparalleled assortment of prestige products in every category, unbiased service from beauty experts, interactive shopping environment, and innovation.</p>

                <br />
                <br />

                <p>
                    Through some of our bestsellers such as Sephora lipsticks, Sephora foundations, and other Sephora products, we explore the universe of beauty and wellness with an unbiased approach to experiential retail. We also host expert tutorial videos from our top brands to help you nail the perfect smokey eye or winged eyeliner. Our team of experts in-store also works hard to assure you have a seamless shopping experience with us and helps you define your skin undertones while purchasing the right sephora foundation for you. Sephora continues to give back to communities and advance inclusion in the beauty industry by providing an unrivaled range of shades for Sephora foundations at unbeatable prices.
                </p>

                <br />
                <br />
                <p>Sephora in India also encompasses a formidable range of skincare, bath and body products, haircare, fragrances and perfumes from international brands. Many of our brands such as Botanist and Forest Essentials boast of incorporating only natural ingredients in their products, whereas award-winning such as Natasha Denona, Nudestix, Kora Organics, Aveda, Olaplex, and more promise only SLS/Paraben-free formulas in their range of products. Be sure to also check out our range of cruelty-free brands that include best-selling brands such as Caudalie, Smashbox, Dear Dahlia, Juice Beauty and much more. Sephora online hosts the entire range of makeup and skin products available in Sephora stores in India. Buy Sephora online on NNNOW and be the first to be alerted when we have a major Sephora India sale event coming up!</p>


                <br />
                <p>
                    Start your Sephora India online shopping on NNNOW.com
                </p>

                <br />
                <p>
                    Women can now shop their favorite luxury beauty brands on the Sephora site or via the NNNOW mobile app. Be spoilt for choice with a wide variety of makeup, skincare, haircare, bath and body and fragrances that you can shop from the comfort of your home. Discover online shopping that offers advantages such as Gift With Purchase, freebie sachets, and discount offers on beauty! Buy Sephora online at amazing deals and prices at the click of a button.
                </p>
            </Box>

        </Box>

        <Box className='fLink'>
            <Link className='L'>WHO WE ARE</Link>
            <Link className='L'>FREQUENTLY ASKED QUESTIONS</Link>
            <Link className='L'>CONTACT US</Link>
        </Box>
        <Flex mt="-20px" ml="600px" alignItems="center">
            <Box
                mr="20px"><i className="fa-brands fa-facebook fa-2x"></i></Box>
            <Box mr="20px"><i class="fa-brands fa-instagram fa-2x"></i></Box>
            <Box mr="20px" ><i class="fa-brands fa-twitter fa-2x"></i></Box>

            <Box><i class="fa-brands fa-youtube fa-2x"></i></Box>
        </Flex>
    </div>
}


export default Footer