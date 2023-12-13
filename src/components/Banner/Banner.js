import React, { useEffect, useState } from "react";
import axios from "../axios";
import { API_KEY, imageUrl } from "../../constants/constants";
import YouTube from "react-youtube";
import "./Banner.css";

function Banner(props) {
  const [movie, setMovie] = useState([]);
  const [url,setUrl] = useState('')
  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const response = await axios.get(
          `trending/all/week?api_key=${API_KEY}&language=en-US`
        );
        const movies = response.data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        setMovie(movies[randomIndex]);
      } catch (error) {
        console.error("Error fetching random movie:", error);
      }
    };

    fetchRandomMovie();
  }, []);
  const handleMovies =(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if (response.data.results.length!==0){
        setUrl(response.data.results[0])
        
      }else{
        console.log('Trailor not available')
      }
    })

  }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },};

  return (
    <div
      style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
      className="banner" >
        <div className="banner-overlay">
      { url &&    <YouTube videoId={url.key} opts={opts} />  }  
      </div>
         <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner-buttons">
          <button onClick={()=>handleMovies(movie.id)} className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
       </div>
       
    <div  className="fade-bottom"></div>
    
   
      </div>
      
  );
}

export default Banner;