import React from "react";
import axios from "axios";

const api = axios.create({ baseURL: "https://api.themoviedb.org/3/" });

const movieApi = {
    
    nowPlaying:() => api.get("movie/now_playing", {
        params:{
            api_key : "5f9c7b977d56104f394ab0ac267e17d7",
            language:"en-US"        
        }
    }),

    topRate:() => api.get("movie/top_rated", {
        params:{
            api_key : "5f9c7b977d56104f394ab0ac267e17d7",
            language:"en-US"        
        }
    }),

    popular:() => api.get("movie/popular", {
        params:{
            api_key : "5f9c7b977d56104f394ab0ac267e17d7",
            language:"en-US"        
        }
    }),

    search:(term) => api.get("search/movie", {
        params:{
            api_key:"5f9c7b977d56104f394ab0ac267e17d7",
            language:"en-US",        
            query: encodeURI(term)
        }
    }),

    detail:(id) => api.get(`movie/${id}`, {
        params:{
            api_key : "5f9c7b977d56104f394ab0ac267e17d7",
            language:"en-US"        
        }        
    })

};

export default movieApi;
