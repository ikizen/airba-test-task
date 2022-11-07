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
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("user");
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn]);

    return children;
};

export default function App() {
    return (
        <ChakraProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />

                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/anime-films"
                        element={
                            <PrivateRoute>
                                <AnimeFilms />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}
