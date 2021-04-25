import  { Link } from "react-router-dom";
import React from "react";
const SearchItem = ({anime , type}) => {
    return (
      <li className="border-solid border-gray-300 border-b-2" key={`${type}${anime.mal_id}`}>
        <Link to= {`/${type}/${anime.mal_id}`} className="w-full flex justify-start py-2 px-4">
          <img src={anime.image_url} className="w-8 h-8 object-cover rounded-full mr-4" alt="avatar" />
          <h3 className="text-lg text-gray-700">{type ==="character" ? (anime.name) : (anime.title)}</h3>
        </Link>
      </li>
    );
};

export default SearchItem;