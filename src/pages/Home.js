import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import DataListUi from "../components/DataListUi";
import SearchBar from "../components/SearchBar";
import AnimeCard from "../components/AnimeCard";
import { GET_TOP } from "../Api";
import LoadingTemp from "../components/LoadingTemp";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [topAnime, setTopAnime] = useState([]);
  const [topManga, setTopManga] = useState([]);
  useEffect(() => {
    getData();
  }, [loading]);

  const getData = () => {
    axios
      .all([axios.get(GET_TOP("anime")), axios.get(GET_TOP("manga"))])
      .then(
        axios.spread((data1, data2) => {
          // output of req.
          setTopAnime(data1.data.top.slice(0, 10));
          setTopManga(data2.data.top.slice(0, 10));
          setLoading(true);
        })
      )
      .catch(
        axios.spread((err1, err2) => {
          console.log(err1, err2);
        })
      );
  };
  return (
    <div className="container mx-auto sm:py-3 md:py-4 lg:py-6">
      <Link
        to="/"
        className="text-xl my-4 mx-auto block font-bold max-w-max bg-blue-600 py-3 px-3 capitalize text-white rounded-md mb-8"
      >
        Anime lab 🚀
      </Link>
      <SearchBar />
      {loading ? (
        <div className="max-w-screen-lg mx-auto">
          <h3 className="text-lg text-gray-800 font-bold my-4 pl-2 capitalize">
            Top Anime
          </h3>
          <DataListUi>
            {topAnime.map(anime => (
              <AnimeCard type="anime" anime={anime} />
            ))}
          </DataListUi>

          <h3 className="text-lg text-gray-800 font-bold my-4 mt- pl-2 capitalize">
            Top manga
          </h3>
          <DataListUi>
            {topManga.map(anime => (
              <AnimeCard type="manga" anime={anime} />
            ))}
          </DataListUi>
        </div>
      ) : (
        <>
          <LoadingTemp loadingType="Home" />
          <LoadingTemp loadingType="Home" />
        </>
      )}
    </div>
  );
};

export default Home;
