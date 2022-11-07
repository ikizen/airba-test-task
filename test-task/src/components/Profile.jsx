import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => !!state.loginActions);

    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         navigate("/login");
    //     }
    // }, []);

    return (
        <>
            <div className="flex justify-center items-center min-w-full min-h-screen bg-orange-500 text-[5rem]">
                Profile
            </div>
        </>
    );
}
