import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import './HomeComp.css';
import { Link } from 'react-router-dom';

const HomeComp = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://omdbapi.com/?s=Avengers&apikey=8c52c820`)
      .then(response => {
        console.log(response);
        setMovies(response.data.Search);
      })
      .catch(error => {
        console.error('Error fetching the movies', error);
      });
  }, []);

  return (
    <Container className="mt-5">
      <header className="mb-4">
        <h1>MaileHereko</h1>
        <p>List of movies and TV Shows I, <span style={{color:'blue'}}>Pramod Poudel </span>have watched till date. Explore what I have watched and also feel free to make a suggestion.</p>
        <div class="search-container mt-5">
            <span class="search-icon">
                <i class="fas fa-search"></i>
            </span>
            <input type="text" class="form-control search-bar" placeholder="Search Movies or TV Shows"/>
        </div>

        <div class="nav-btn-group mt-4">
            <button type="button" class="btn nav-btn active">All</button>
            <button type="button" class="btn nav-btn">Movies</button>
            <button type="button" class="btn nav-btn">TV Shows</button>
        </div>

      </header>
      <Row>
        {movies.map(movie => (
          <Col md={3} key={movie.imdbID} className="mb-4">
            <Card className="movie-card">
              <Link to={`/movie/${movie.imdbID}`} className='text-decoration-none'>
                <div className="image-container">
                  <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
                  <span className="star-icon"><i className="fa-regular fa-star"></i>7.7</span>
                </div>
                <Card.Body>
                  <Card.Title className='text-start'>{movie.Title}</Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeComp;
