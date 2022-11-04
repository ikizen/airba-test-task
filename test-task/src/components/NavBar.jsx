import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function NavBar() {
    return (
        <>
            <div className="flex flex-row text-yellow-50 font-bold font-mono justify-between items-center p-3 bg-orange-800">
                <div className="text-[2rem]">Navbar</div>
                <nav className="flex flex-row gap-2">
                    <Link to="/">
                        <Button colorScheme="blue">Home</Button>
                    </Link>
                    <Link to="/profile">
                        <Button colorScheme="blue">Profile</Button>
                    </Link>
                    <Link to="anime-films">
                        <Button colorScheme="blue">Anime Films</Button>
                    </Link>
                    <Link to="login">
                        <Button colorScheme="blue">Login</Button>
                    </Link>
                </nav>
            </div>
        </>
    );
}
