//API PATH
const BASE_URL = 'https://api.jikan.moe/v3/';

//search url
export const SEARCH_URL = (query , type) => `${BASE_URL}search/${type}?q=${query}`;

// top anime and manga
export const GET_TOP = type =>  `${BASE_URL}top/${type}`;

//anime , manga , people details

export const GET_DETAILS = (type , id) => `${BASE_URL}${type}/${id}`;
