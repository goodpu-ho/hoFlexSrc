import React from "react";
import styled from "styled-components";
import Loader from "component/Loader";
import Section from "../../component/Section";
import Poster from "../../component/Poster";
import Error from "../../component/Error";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  margin-left: 30px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 28px;
`;

const SearchPresenter = ({
  movieResult,
  tvResult,
  searchTerm,
  loading,
  error,
  handleSummit,
  updateTerm,
}) => (
  <Container>
    <Form onSubmit={handleSummit}>
      <Input
        placeholder="Input Search Name"
        value={searchTerm}
        onChange={updateTerm}
      ></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResult && movieResult.length > 0 && (
          <Section title="movie Result">
            {movieResult.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_data && movie.release_data.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResult && tvResult.length > 0 && (
          <Section title="tv Result">
            {tvResult.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.original_name}
                imageUrl={tv.poster_path}
                rating={tv.vote_average}
                year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {error && <Error text={error}></Error>}
      </>
    )}
  </Container>
);

export default SearchPresenter;
