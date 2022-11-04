import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://ghibliapi.herokuapp.com/films";

export default function AnimeFilms() {
    const [films, setFilms] = useState([]);

    const fetchFilms = async () => {
        await axios.get(url).then((response) => {
            const filmData = response.data;
            // console.log(response.data);
            // filmData.map((film) => console.log(film.title));
            setFilms(filmData);
        });
    };

    // console.log(films);
    useEffect(() => {
        fetchFilms();
    }, []);

    return (
        <>
            <div className="flex flex-col bg-orange-500">
                <div className="self-center text-[2rem] font-bold">
                    Anime-Films
                </div>
                <div className="grid gap-3 grid-cols-3 text-white">
                    {films.map((film) => (
                        <div
                            key={film.id}
                            className="flex flex-col w-min bg-[#9a3412] m-4 p-6 rounded-lg"
                        >
                            <div className="pb-3 self-center font-bold">
                                {film.title}
                            </div>
                            <img
                                src={film.movie_banner}
                                alt=""
                                className="max-w-[330px] pb-3"
                            />
                            <div className="text-justify">
                                {film.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
