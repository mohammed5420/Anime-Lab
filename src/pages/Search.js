import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams , Link } from "react-router-dom";
import { SEARCH_URL } from "../Api";
import AnimeCard from "../components/AnimeCard";
import DataListUi from "../components/DataListUi";
import LoadingTemp from "../components/LoadingTemp";

const Search = () => {
  const { type, query } = useParams();
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    axios
      .get(SEARCH_URL(query, type))
      .then(res => {
        setLoading(false);
        setSearch(res.data.results);
        console.log(res.data.results);
        setLoading(true);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, [query, type]);
  return (
    <div className="container mx-auto">
          <Link
        to="/"
        className="text-xl mt-4 block font-bold max-w-max bg-blue-600 py-3 px-3 text-white rounded-md mb-8"
      >
        Anime Lab 🚀
      </Link>
      {loading ? (
        <DataListUi>
          {search.map(item => (
            <AnimeCard type={type} anime={item} />
          ))}
        </DataListUi>
      ) : (
        <LoadingTemp loadingType="Search"/>
      )}
    </div>
  );
};

export default Search;
