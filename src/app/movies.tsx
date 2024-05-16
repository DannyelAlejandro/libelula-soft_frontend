"use client";

import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import MovieCard from "../components/movie-card";
import movieService from "@/services/movieService";

export function Movies() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('/api/movies')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Cargando...</p>
    if (!data) return <p>No existen películas</p>

    /*const filteredMovies = MOVIES.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );*/

    const filter = _ => {
        if (search !== '') {
            fetch('/api/movies/search?search=' + search)
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                })
        } else {
            fetch('/api/movies')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
        }
    }

    return (
        <section className="px-10">
            <div className="container mx-auto">
                <div className="mb-20 flex w-full flex-col items-center">
                    <Typography variant="h2" color="blue-gray" className="mb-2">
                        Películas
                    </Typography>
                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Buscar películas..."
                            className="border border-gray-300 px-4 py-2 rounded-md mr-2"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <Button color="gray" size="sm" onClick={filter}>
                            Buscar
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
                    {data.map((props, key) => (
                        <MovieCard key={key} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Movies;
