import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiPlay } from 'react-icons/bi';      
import { AiOutlinePlus } from 'react-icons/ai';  

const apikey = "084fec9740566546955ca68233735d71";
const apikey2 = "b9b5d09840e160233c8019c8152e4617";

const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";

const popular = "popular";
const nowPlaying = "now_playing";
const upcoming = "upcoming";
const topRated = "top_rated";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;
const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>
    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowplayingMovies, setNowplayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topratedMovies, setTopratedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apikey}`);
      setPopularMovies(results);
    };

    const fetchNowplaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey2}`);
      setNowplayingMovies(results);
    };
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
      setUpcomingMovies(results);
    };
    const fetchToprated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apikey2}`);
      setTopratedMovies(results);
    };

    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(
        `${url}/genre/movie/list?api_key=${apikey2}&language=en-US`
      );
      setGenre(genres);
      // console.log(genres);
    };

    getAllGenre();
    fetchPopular();
    fetchNowplaying();
    fetchUpcoming();
    fetchToprated();
  }, []);

  return (
    <section className="home ">
      <div
        className="banner"
        style={{
          backgroundImage:
            popularMovies.length > 0 && popularMovies[0].poster_path
              ? `url(${imgUrl}/${popularMovies[0].poster_path})`
              : "rgb(16,16,16)",
        }}
      >
        {popularMovies.length > 0 ? (
          <>
            <h1>{popularMovies[0].original_title}</h1>
            <p>{popularMovies[0].overview}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}

        <div>
            <button> <BiPlay/> play  </button>
            <button>My List  <AiOutlinePlus/> </button>
        </div>
      </div>

      <Row title={"Popular Movies on Netflix"} arr={popularMovies} />
      <Row title={"Now Playing"} arr={nowplayingMovies} />
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Top rated On Netflix"} arr={topratedMovies} />

      <div className="genreBox">
        {genre.map((item) => (
          <Link key={item.id} to={`/genre/${item.id}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Home;
