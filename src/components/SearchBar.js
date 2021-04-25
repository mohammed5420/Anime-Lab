import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchItem from "./SearchItem";
import { SEARCH_URL } from "../Api";
import { useHistory } from "react-router";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("anime");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState([]);
  const history = useHistory();

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
    <div className="mb-4">
      <form
        className="max-w-xl mx-auto relative"
        onSubmit={e => {
          e.preventDefault();
          history.push(`/search/${type}/${query}`);
        }}
      >
        <div className="flex justify-evenly items-center">
          <input
            type="text"
            value={query}
            placeholder="anime,manga,character"
            onChange={e => {
              let q = e.target.value;
              setQuery(q);
            }}
            className="block w-2/4 rounded-lg py-2 px-4 border-solid border-2 border-gray-300"
          />
          <select
            onChange={e => {
              setType(e.target.value);
            }}
            className="block w-1/4 border-solid border-2 rounded-lg py-2 px-4  border-gray-300"
          >
            <option value="anime" defaultValue>
              anime
            </option>
            <option value="manga">manga</option>
            <option value="character">character</option>
          </select>
        </div>
        {loading && (
          <ul className="w-full z-10 absolute top-20 bg-white p-4 shadow-md max-h-96 overflow-y-scroll rounded-lg border-solid border-2 border-gray-300">
            {search.map(anime => (
              <SearchItem anime={anime} type={type} setType={setType} />
            ))}
          </ul>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
