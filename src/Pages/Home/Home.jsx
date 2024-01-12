import { useState } from "react";
import "./Home.scss";
import { useEffect } from "react";
import axios from 'axios'
import requests from "../../Requests.js";
import Row from "../../Components/Row/Row.jsx";

const Home = () => {

  const [movies, setMovies] = useState([])
  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results)
    })
  }, [])

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-container">

          <img className="" src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.title} />
          <div className="bg">

            <h1>{movie?.title}</h1>
          </div>
        </div>

      </div>
      <div className="lists">

        <h2>Popular movies</h2>
        <Row request={requests.requestPopular} />
        <h2>Popular TV shows</h2>
        <Row request={requests.requestTopRated} />
        <h2>Popular people</h2>
        <Row request={requests.requestTrending} />
      </div>



    </div>
  );
};

export default Home;
