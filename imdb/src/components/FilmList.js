import React, { Component } from 'react';
import Film from './Film';

const  FilmList = (props) => {
  const filmNodes = props.data.map(film => {
    return (
      <Film title={film.title} key={film.id} link={film.imdbLink}>
      </Film>
    );
  })
  return <div className="film-list">{filmNodes}</div>
}

export default FilmList;
