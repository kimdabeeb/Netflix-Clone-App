import React from "react";
import Nav from './Nav';
import Banner from './Banner';
import Requests from './Requests'
import Row from './Row';
import './Home';

const Home = () => {
    return (
        <div className="Home">
            <Nav />
            <Banner />
            
            <Row title="NETFLIX ORIGINALS" fetchUrl={Requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending NOW" fetchUrl={Requests.fetchTrending} isLargeRow />
            <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} isLargeRow />
            <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} isLargeRow />
            <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} isLargeRow />
            <Row title="Crime Movies" fetchUrl={Requests.fetchCrimeMovies} isLargeRow />
            <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} isLargeRow />
            <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} isLargeRow />
            <Row title="Family Movies" fetchUrl={Requests.fetchFamilyMovies} isLargeRow />
            <Row title="Animation Movies" fetchUrl={Requests.fetchAnimationMovies} isLargeRow />
            <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} isLargeRow />
        </div>
    )
}

export default Home;