import React from "react";
import axios from "axios";

const api = axios.create({ baseURL: "https://api.themoviedb.org/3/" });

export const tvApi = {
    
    airingTodpy:() => api.get("tv/airing_today", {
        params:{
            api_key : "5f9c7b977d56104f394ab0ac267e17d7",
            language:"en-US"        
        }
    }),

    topRate:() => api.get("tv/top_rated", {
        params:{
            api_key : "5f9c7b977d56104f394ab0ac267e17d7",
            language:"en-US"        
        }
    }),

    popular:() => api.get("tv/popular", {
        params:{
            api_key : "5f9c7b977d56104f394ab0ac267e17d7",
            language:"en-US"        
        }
    }),

    search:(term) => api.get("search/tv", {
        params:{
            api_key:"5f9c7b977d56104f394ab0ac267e17d7",
            language:"en-US",  
            query: encodeURI(term)
        }
    }),
    
    detail:(id) => api.get(`tv/${id}`, {
        params:{
            api_key : "5f9c7b977d56104f394ab0ac267e17d7",
            language:"en-US"        
        }        
    })

};

export default tvApi;
