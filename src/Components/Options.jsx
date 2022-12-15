import {
    Box, List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Flex,
} from "@chakra-ui/react"
export const Sale = () => {

    return <Box w="90%" >

        <Flex justifyContent="space-evenly">
            <List ml="-199px">
                <ListItem className="Bold">FACE</ListItem>
                <ListItem>BB & CC Cream</ListItem>
                <ListItem>ConCealer</ListItem>
                <ListItem>Face Primer</ListItem>
                <ListItem>Highlighter</ListItem>
                <ListItem>Face Brushes</ListItem>
                <ListItem>Makeup Palette</ListItem>


            </List>

            <List>
                <ListItem>Eye</ListItem>
                <ListItem>Mascara</ListItem>
                <ListItem>Eyeliner</ListItem>
                <ListItem>Eyebrow</ListItem>
                <ListItem>Eye Primer</ListItem>
                <ListItem>Eyeshadow</ListItem>
                <ListItem>Eye Brushes</ListItem>
                <ListItem>Contact Lenses</ListItem>

            </List>

            <List>
                <ListItem>LIP</ListItem>
                <ListItem>Lipstick</ListItem>
                <ListItem>Lip Stain</ListItem>
                <ListItem>Lip Liner</ListItem>
                <ListItem>Lip Bal & Treatment</ListItem>
                <ListItem>Lip Brushes</ListItem>
                <ListItem>fsk</ListItem>
                <ListItem>fsk</ListItem>

            </List>

            <List>
                <ListItem>CHEEK</ListItem>
                <ListItem>Blush</ListItem>
                <ListItem>Bronzer</ListItem>
                <ListItem>Highlighter</ListItem>
                <ListItem>Face Oils</ListItem>


            </List>

            <List>
                <ListItem>NAIL MAKEUP</ListItem>
                <ListItem>Nail Polish</ListItem>
                <ListItem>Nail Care</ListItem>
                <ListItem>Manicure & Pedicure Tools</ListItem>
                <ListItem>Face Oils</ListItem>


            </List>

        </Flex>

    </Box>

}


