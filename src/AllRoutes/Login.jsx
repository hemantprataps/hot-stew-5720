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

import { useState, useContext } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"



import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();

    return (<button className='newbtn' onClick={() => loginWithRedirect()}>Log In</button>
        /* <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
        </button> */
    )
};

export default LoginButton;
/*function Login() {
    // const OverlayOne = () => (
    //     <ModalOverlay
    //         bg='blackAlpha.300'
    //         backdropFilter='blur(10px) hue-rotate(90deg)'
    //     />
    // )

    // const [overlay, setOverlay] = useState(<OverlayOne />)

    // const { isOpen, onOpen, onClose } = useDisclosure()

    // const [login, setlogin] = useState(false)
    // const [email, setEmail] = useState("")


    // const [password, setPassword] = useState("")
    return 
        <div alignItems="center">
            <Button border="none" onClick={() => {
                setOverlay(<OverlayOne />)
                onOpen()
            }}>Login</Button>

            <Modal className="aaaa" margin="auto" closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent alignItems="center" className='login'>
                    <ModalHeader>Login </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mt="20px" display="inline-block" position="relative" overflowY="hidden" w="354px" h="600px" alignItems="center" backgroundColor="white" border="1px solid #f39" pb={6}>
                        <Box className='form' justifyContent="center">
                            <Text className='f2'>Login</Text>
                            <form >
                                <Box>
                                    <label>Enter Your email</label>
                                    <Input mb="30px" w="340px" type="email" h="40px"

                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="email"
                                    />

                                    <Input mb="30px" w="340px" type="email" h="40px"

                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="password"
                                    />
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
    
}

export default Login*/