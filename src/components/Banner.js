import axios from 'axios';
import { useEffect, useState } from 'react';
import requests from './Requests';
import '../css/Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  /* async awit 비동기통신, 새로고침  fetchData() 실행되고, 넷플릭스 json파일 가져와서 movie 내용변경하여 출력 */
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  /* overflow text eclipse, 영화설명 */
  function turncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {turncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className='banner--fadeBottom'></div>
    </header>
  );
}

export default Banner;
