import React from "react";
import movieApi from "../../api/movieApi";
import MoviePresenter from "./MoviePresenter";

class Movie extends React.Component {

    state = {
        nowPlaying : null,
        topRated : null,
        popular : null,
        error : null,
        loading : true
    }

    async componentDidMount(){

        try{

            const {data:{results:nowPlaying}} = await movieApi.nowPlaying();
            const {data:{results:topRated}} = await movieApi.topRate();
            const {data:{results:popular}} = await movieApi.popular();

            this.setState({
                nowPlaying,
                topRated,
                popular,

            })

        } catch {            
            this.setState({
                error:"Can't get movie data"
            })
        } finally {
            this.setState({
                loading:false
            })
        }
    }

    render(){

        // console.log(this.state);
        const {nowPlaying, topRated, popular, loading, error} = this.state;
        return(
            <MoviePresenter 
                nowPlaying = {nowPlaying}
                topRated = {topRated}
                popular = {popular}
                loading = {loading}
                error = {error}
            />            
        )
    }
}

export default Movie;