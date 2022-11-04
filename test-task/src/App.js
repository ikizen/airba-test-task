import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import AnimeFilms from "./components/AnimeFilms";
import Profile from "./components/Profile";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

export default function App() {
    // const navigate = useNavigate();
    const isLoggedIn = true;

    const toLoginPage = () => {
        if (isLoggedIn) {
            // navigate("/login");
        }
    };

    return (
        <ChakraProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* {isLoggedIn ? (
                        <Route path="/anime-films" element={<AnimeFilms />} />
                    ) : (
                        toLoginPage()
                    )} */}
                    <Route path="/anime-films" element={<AnimeFilms />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}
