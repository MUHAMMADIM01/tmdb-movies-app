import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = "0894c4d1284104919aa59bd45c405b92"

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response => {
        setMovies(response.data.results)
      })
      .catch(error => {
        console.error("Error fetching movies:", error)
      })
  }, [])

  return (
    <div className="container py-5 text-white">
      <h1 className="mb-4 text-center">Popular Movies</h1>
      <div className="row">
        {movies.map(movie => (
          <div className="col-md-4 mb-4" key={movie.id}>
            <div className="card h-100">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview.slice(0, 100)}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
