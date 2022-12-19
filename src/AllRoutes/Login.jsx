import {
    Modal,
    ModalOverlay,
    ModalContent, Input,
    ModalHeader,
    ModalFooter, Text,
    ModalBody,
    ModalCloseButton, Button, Box,
} from '@chakra-ui/react'
import "./Home.css"
import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [login, setlogin] = useState(false)



    return (
        <div alignItems="center">
            <Button border="none" onClick={onOpen}>Login</Button>

            <Modal className="aaaa" margin="auto" closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent alignItems="center" className='login'>
                    <ModalHeader>Login </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody w="354px" h="600px" alignItems="center" backgroundColor="white" border="1px solid #f39" pb={6}>
                        <Box className='form' justifyContent="center">
                            <Text className='f2'>Login</Text>
                            <form >
                                <Box>
                                    <label>Enter Your email</label>
                                    <Input mb="30px" w="340px" type="email" h="40px" />
                                    <Button onClick={() => setlogin(true)} backgroundColor="#f39" h="42px" color="white" w="340px"> Login</Button>


                                </Box>
                            </form>

                            {login ? <Box >Hemant </Box> : null}
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>

                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Login