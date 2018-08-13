import React, { Component } from 'react';


const Film = (props) => {
  return(
    <div className="film">
      <h4 className="film-title">{props.title}</h4>
      <a href={props.link}>See on IMDB</a>
      {props.children}
    </div>
  );
}

export default Film;
