import React, { Component } from 'react';


const Film = (props) => {
  return(
    <div className="film">
      <table>
        <tr>
          <td><h4 className="film-title">{props.title}</h4></td>
          <td><a href={props.link}>Showtimes</a></td>
        </tr>
    </table>
    </div>
  );
}

export default Film;
