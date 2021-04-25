import React from "react";
import {Link} from "react-router-dom";
import star from "../images/star.svg";

const AnimeCard = ({ anime , type}) => {

  return (
    <Link to= {`/${type}/${anime.mal_id}`} key={`${type}${anime.mal_id}`}  className ="block  flex-0 mb-4 md:mb-0 relative shadow-md w-52 h-80 bg-blue-200  rounded-md overflow-hidden">
        <img className ="block object-cover" src={anime?.image_url} alt={anime.title || anime.name} />

        <div className="absolute bottom-0 left-0 right-0 h-24 pt-6 bg-gradient-to-t from-gray-900  to-transparent">
        <h3 className="text-md overflow-truncate h-5 overflow-hidden text-gray-100 font-bold my-2 px-5 capitalize">{`${anime.name ? anime.name : ""} ${anime.title ? anime.title : ""}`}</h3>
        {anime.score && (<p className ="text-gray-200 text-md px-5 mb"><img className="w-5 h-5 inline" src={star} alt="star" /> <span>{anime.score}</span></p>)}
        </div>
    </Link>
  );
};

export default AnimeCard;
