import React, { useState } from "react";
import {
    Box,
    InputGroup,
    Input,
    FormControl,
    InputLeftElement,
    Stack,
    Button,
} from "@chakra-ui/react";
import { faUser, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { loginActions } from "../app/isLoggedIn";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("subimted");
        if (user === "admin" && pwd === "12345") {
            console.log("Well done");
            localStorage.setItem("user", user);
            navigate("/profile");
        } else {
            alert("wrong");
        }
    };

    return (
        <>
            <div className="flex justify-center items-center min-w-full min-h-screen bg-orange-500">
                <Box
                    bg="white"
                    borderRadius={15}
                    p={6}
                    color="black"
                    spacing={4}
                >
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={4}>
                            <div className="font-bold self-center text-[2rem]">
                                Login
                            </div>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        children={
                                            <FontAwesomeIcon icon={faUser} />
                                        }
                                    />
                                    <Input
                                        placeholder="Username"
                                        onChange={(e) =>
                                            setUser(e.target.value)
                                        }
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        children={
                                            <FontAwesomeIcon icon={faUnlock} />
                                        }
                                    />
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        onChange={(e) => {
                                            setPwd(e.target.value);
                                            console.log(pwd);
                                        }}
                                    />
                                </InputGroup>
                            </FormControl>
                            <Button
                                borderRadius={6}
                                type="submit"
                                variant="solid"
                                colorScheme="orange"
                                width="full"
                            >
                                Login
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </div>
        </>
    );
}
