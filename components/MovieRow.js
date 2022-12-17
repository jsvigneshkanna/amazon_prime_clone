/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import axios from "../middleware/Axios";

const MovieRow = ({ fetchUrl, title }) => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setmovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="py-8 px-16">
      <div className="flex items-center gap-2 justify-start pb-5">
        <p className="font-semibold text-yellow-500 text-xl">Store</p>
        <p className="font-bold text-white text-xl">{title}</p>
        <p className=" font-light text-blue-500 text-xs">See more</p>
      </div>

      {/* posters */}
      <div className="flex justify-center items-center overflow-clip hover:overflow-x-auto no-scrollbar gap-4">
        {movies.map((movie, index) => {
          return (
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="moview posters"
              key={index}
              className="w-80 rounded-sm hover:scale-110 hover:overflow-visible"
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieRow;
