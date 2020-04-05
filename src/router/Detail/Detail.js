import React from "react";
import styled from "styled-components";
import DetailPresenter from "./DetailPresenter";
import movieApi from "../../api/movieApi";
import tvApi from "../../api/tvApi";

class Detail extends React.Component {
  constructor(props) {
    super(props);

    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: { params: {id} },
      history: { push },
    } = this.props;


    const parseId = parseInt(id);

    console.log(id);
    console.log(parseId);

    if (isNaN(parseId)) {
      return push("/");
    }

    const { isMovie } = this.state;

    try {
      if (isMovie) {
        const { data: result } = await movieApi.detail(id);
        this.setState({ result });
      } else {
        const { data: result } = await tvApi.detail(id);
        this.setState({ result });          
      }
    } catch {
      this.setState({
        error: "can't get detail",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { result, error, loading} = this.state;
    console.log(this.state);
    return <DetailPresenter result={result} error={error} loading={loading} />
  }
}

export default Detail;
