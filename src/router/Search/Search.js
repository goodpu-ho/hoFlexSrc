import React from "react";
import SearchPresenter from "./SearchPresenter";
import movieApi from "../../api/movieApi";
import tvApi from "../../api/tvApi";

class Search extends React.Component {
  state = {
    movieResult: null,
    tvResult: null,
    searchTerm: "",
    loading: true,
    error: null,
  };

  handleSummit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    console.log("serchByTerm");
    const { searchTerm } = this.state;
    try {
      const {
        data: { results: movieResult }
      } = await movieApi.search(searchTerm);
      const {
        data: { results: tvResult }
      } = await tvApi.search(searchTerm);

      this.setState({
        movieResult,
        tvResult,
      });
      this.setState({ loading: true });
    } catch {
      this.setState({
        error: "Can't get Movie infomation",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  updateTerm = (event) => {
    const {
      target: { value },
    } = event;
    this.setState({
      searchTerm: value,
    });
  };

  componentDidMount(){
      
  }

  render() {
    const { movieResult, tvResult, searchTerm, loading, error } = this.state;
    console.log(this.state);
    
    return (
      <SearchPresenter
        movieResult={movieResult}
        tvResult={tvResult}
        searchTerm={searchTerm}        
        loading={loading}
        error={error}
        handleSummit={this.handleSummit}
        updateTerm={this.updateTerm}
      ></SearchPresenter>
    );
  }
}

export default Search;
