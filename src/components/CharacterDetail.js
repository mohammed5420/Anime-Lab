import React from "react";
import DataListUi from "./DataListUi";
import AnimeCard from "./AnimeCard";

const CharacterDetail = ({ character }) => {
  return (
    <div className="max-w-screen-xl mx-auto pt-6 px-3 sm:px-4">
      <div className="md:flex  justify-start">
        <img
          className="rounded-lg mr-4 md:mr-6 w-52 h-80 bg-blue-200"
          src={character.image_url}
          alt="anime picture"
        />
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 mb-3">
            {character.name}
          </h2>
          <h3 className="text-lg font-bold mb-3">About</h3>
          <p className="text-gray-600 mb-3">
            {character.about && character.about.replace("/<[^>]*>/g", "")}
          </p>
          <h3 className="text-lg font-bold mb-3">Animography</h3>
          <div className="mb-3">
            {character.animeography && (
              <DataListUi>
                {character.animeography.map(el => (
                  <AnimeCard anime={el} type="anime" />
                ))}
              </DataListUi>
            )}
          </div>
          <h3 className="text-lg font-bold mb-3">Mangaography</h3>
          <div className="mb-3">
            {character.mangaography && (
              <DataListUi>
                {character.mangaography.map(el => (
                  <AnimeCard anime={el} type="manga" />
                ))}
              </DataListUi>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
