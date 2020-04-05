import React from "react";
import Loader from "../../component/Loader";
import Section from "../../component/Section";
import Poster from "../../component/Poster";
import styled from "styled-components";

const Containter = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ todayAiring, topRated, popular, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Containter>
      {todayAiring && todayAiring.length > 0 && (
        <Section title="방송중인 TV Show">
          {todayAiring.map((tv) => (
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

      {topRated && topRated.length > 0 && (
        <Section title="시청 순위">
          {topRated.map((tv) => (
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

      {popular && popular.length > 0 && (
        <Section title="인기순위">
          {popular.map((tv) => (
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
    </Containter>
  );

export default TVPresenter;
