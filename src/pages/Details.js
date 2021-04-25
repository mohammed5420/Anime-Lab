import React, { useState, useEffect } from "react";
import { useParams , Link } from "react-router-dom";
import axios from "axios";
import { GET_DETAILS } from "../Api";
import LoadingTemp from "../components/LoadingTemp";
import CharacterDetail from "../components/CharacterDetail";
import AnimeMangaDetail from "../components/AnimeMangaDetail";

const Details = () => {
  let { type, id } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData(type, id);
  }, [id, type]);

  const getData = (type, id) => {
    setLoading(false);
    axios
      .get(GET_DETAILS(type, id))
      .then(res => {
        setDetails(res.data);
        setLoading(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
          <Link
        to="/"
        className="text-xl block mt-4 font-bold max-w-max bg-blue-600 py-3 px-3 text-white rounded-md mb-8"
      >
        Anime Lab 🚀
      </Link>
    {loading ? (type === "anime" || type === "manga" ? (
        <AnimeMangaDetail data={details} />
      ) :(
        <CharacterDetail character={details} />
      )) : <LoadingTemp loadingType="Details" />}
    </div>
  );
};

export default Details;
