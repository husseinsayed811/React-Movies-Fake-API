
import { useParams } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

import axiosInstance from '../../axiosInstance/axiosInstance';

const Detiles = () => {



  const { id } = useParams()
  const [movie, setmovie] = useState([]);
  const urlToImage = "http://image.tmdb.org/t/p/w500/"

  useEffect(() => {

    axiosInstance.get(`/movie/${id}`).then((res) => {
      console.log((res.data)
      )
      setmovie(res.data)

    })
      .catch((err) => {
        console.log(err);
      })
  }, [id])



  return (

    <div class="card mb-3" style={{ width: '40rem', marginLeft: 350, marginTop: 20 }}>
      <div class="row g-0">
        <div class="col-md-5">
          <img src={`${urlToImage}/${movie.backdrop_path} `} class="img-fluid rounded-start" alt="..." style={{ width: 400, height:400 }} />
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h5 class="card-title">{movie.title}</h5>
            <p class="card-text">Overview : {movie.overview}</p>
            <p class="card-text">Popularity : {movie.popularity}</p>
            <p class="card-text">Vote Average : {movie.vote_average}</p>
            <p class="card-text"><small class="text-muted">Release at : {movie.release_date}</small></p>
          </div>
        </div>
      </div>
    </div>

      

    
  );
}

export default Detiles;
