import React from "react";
import { Link } from "react-router-dom";

const AnimeDetail = ({ data }) => {
  return (
    <div className="max-w-screen-xl mx-auto pt-6 px-3 sm:px-4">
      <div className="md:flex  justify-start">
        <img
          className="rounded-lg max-h-80 mr-4 md:mr-6 w-52 h-80 bg-blue-200"
          src={data.image_url}
          alt="anime picture"
        />
        <div className="info mt-4">
          <h3 className="text-2xl max-w-xl font-bold text-indigo-600 mb-3">
            {data.title}
          </h3>
          <p className="mb-3 ">
            <span className="text-lg font-bold">Popularity</span>{" "}
            <span className="bg-blue-200 text-gray-600 rounded-sm px-2 py-1">
              #{data.popularity}
            </span>
          </p>
          <p className="mb-3">
            <span className="text-lg font-bold">Members</span>{" "}
            <span className="bg-blue-200 text-gray-600 rounded-sm px-2  py-1">
              {data.members}
            </span>
          </p>
          <p className="mb-3">
            <span className="text-lg font-bold">Type</span>{" "}
            <span className="bg-blue-200 text-gray-600 rounded-sm px-2  py-1">
              {data.type}
            </span></p>
            {data.type === "Manga" ? (
              <div>
                <p className="mb-3 ">
                  <span className="text-lg font-bold">Chapters</span>{" "}
                  <span className="bg-blue-200 text-gray-600 rounded-sm px-2 py-1">
                    {data.chapters ? (data.chapters) : "1"}
                  </span>
                </p>
                <p className="mb-3">
                  <span className="text-lg font-bold">Volumes </span>
                  <span className="bg-blue-200 text-gray-600 rounded-sm px-2  py-1">
                     {data.volumes}
                  </span>
                </p>
              </div>
            ) : (
              ""
            )}
          
          <div className="max-w-screen-md">
            <h3 className="text-lg font-bold mb-3">Synopsis :</h3>
            <p className="text-gray-600 mb-3">
              {data.synopsis && data.synopsis.replace("/<[^>]*>/g", "")}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Related :</h3>
            {data.related &&
              Object.entries(data.related).map(el => (
                <>
                  <h2 className="text-lg mb-2 ">{el[0]}</h2>
                  {el[1].map(arr => (
                    <Link
                      to={`/${arr.type}/${arr.mal_id}`}
                      className="text-sm mx-2 underline text-blue-400"
                    >
                      {arr.name}
                    </Link>
                  ))}
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;
