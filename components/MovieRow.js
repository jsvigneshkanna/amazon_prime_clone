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
    <div className="py-2 px-16">
      <div className="flex items-center gap-2 justify-start pb-2">
        <p className="font-bold text-yellow-500 text-xl">Store</p>
        <p className="font-semibold text-white text-xl">{title}</p>
        <p className=" font-normal text-blue-400 text-xs hover:underline hover:underline-offset-2 cursor-pointer">
          See more
        </p>
      </div>

      {/* posters */}
      <div className="flex justify-center items-center overflow-x-auto no-scrollbar gap-4 py-2">
        {movies.map((movie, index) => {
          return (
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="moview posters"
              key={index}
              className="w-[380px] h-[160px] rounded-md hover:scale-110 shadow-lg shadow-slate-900"
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieRow;
