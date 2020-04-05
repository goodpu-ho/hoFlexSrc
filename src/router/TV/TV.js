import React from "react";
import tvApi from "../../api/tvApi";
import TVPresenter from "./TvPresenter";

class TV extends React.Component {

    state = {
        todayAiring : null,
        topRated : null,
        popular : null,
        error : null,
        loading : true
    }

    async componentDidMount() {

        try{
            const {data:{results:todayAiring}} = await tvApi.airingTodpy();
            const {data:{results:topRated}} = await tvApi.topRate();
            const {data:{results:popular}} = await tvApi.popular();

            this.setState({
                todayAiring,
                topRated,
                popular,

            })
        } catch {
            this.setState({
                error:"Can't get tv data"
            })
        } finally {
            this.setState({
                loading:false
            })
        }
    }

    render(){

        console.log(this.state);
        const {todayAiring, topRated, popular, loading, error} = this.state;
        return(
            <TVPresenter
                todayAiring = {todayAiring}
                topRated = {topRated}
                popular = {popular}
                loading = {loading}
                error = {error}
            />            
        )
    }
}

export default TV;