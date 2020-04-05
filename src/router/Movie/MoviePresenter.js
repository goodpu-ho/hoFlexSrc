import React from "react";
import Loader from "../../component/Loader";
import Section from "../../component/Section";
import Poster from "../../component/Poster";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const MoviePresenter = ({ nowPlaying, topRated, popular, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="현재 상영 중인 영화">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date}
              isMovie={true}
            ></Poster>
          ))}
        </Section>
      )}

      {topRated && topRated.length > 0 && (
        <Section title="많이 관람한 영화 순위">
          {topRated.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="인기순위">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date}
              isMovie={true}
            />
          ))}
        </Section>
      )}
    </Container>
  );

export default MoviePresenter;
