import React, { Component } from 'react';
import FilmList from '../components/FilmList.js';

class FilmBox extends Component{
    constructor(props){
      super(props);
      this.state = {
        data: [{
          id: 1,
          title: 'The Shawshank',
          imdbLink: "https://www.imdb.com/title/tt0111161/"
        },
        {
          id: 2,
          title: 'Pulp Fiction',
          imdbLink: "https://www.imdb.com/title/tt0110912/?ref_=fn_al_tt_1"
        },
        {
          id: 3,
          title: 'The Godfather',
          imdbLink: "https://www.imdb.com/title/tt0068646/?ref_=fn_al_tt_1"
        },
        {
          id: 4,
          title: 'Forrest Gump',
          imdbLink: "https://www.imdb.com/title/tt0109830/?ref_=fn_al_tt_1"
        },
        {
          id: 5,
          title: 'Schindlers List',
          imdbLink: "https://www.imdb.com/title/tt0108052/?ref_=fn_al_tt_1"
        },
        {
          id: 6,
          title: 'Seven Samurai',
          imdbLink: "https://www.imdb.com/title/tt0047478/?ref_=fn_al_tt_1"
        }]
      }
    }

    render(){
    return(
      <div className="film-box">
      <h2>UK Opening This Week</h2>
      <FilmList data={this.state.data}/>
      <h4><a href="https://www.cineworld.co.uk/" target="_blank">
      See more opening this week
    </a></h4>
      <div className="all-cinemas">
      <h3><a href="https://www.cineworld.co.uk/" target="_blank">
        Get Showtimes >>
      </a></h3>
    </div>
  </div>
  )
  }
}

export default FilmBox;
