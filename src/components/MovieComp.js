import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './MovieComp.css';
import image from '../image/avg.jpg';

const MovieComp = () => {
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?i=${movieId}&apikey=8c52c820`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Error fetching the movie details', error);
      });
  }, [movieId]);

  return (
    <Container className="mt-5">
      <div className="image-container">
        <Image src={image} className="full-width-image" alt='avg' />
        <div className="text-overlay">
          <h2>{movie.Title}</h2>
        </div>
      </div>

      <Row className="img-row">
        <Col md={4} className="mb-4">
          <Image src={movie.Poster} className="img-fluid image1" alt={movie.Title} />
        </Col>
        <Col md={8}>
          <h2>{movie.Title}</h2>
          <p className='plot'>{movie.Plot}</p>
          <span className="star-icon1">
            <i className="fa-regular fa-star"></i> {movie.imdbRating}
          </span>
          <div className="movie-details">
            <div className="detail-item">
              <h6 className="mt-4">Type</h6>
              <span>{movie.Type}</span>
            </div>
            <div className="detail-item">
              <h6 className="mt-4">Released Date</h6>
              <span>{movie.Released}</span>
            </div>
            <div className="detail-item">
              <h6 className="mt-4">Runtime</h6>
              <span>{movie.Runtime}</span>
            </div>
            <div className="detail-item">
              <h6 className="mt-4">Genre</h6>
              <span>{movie.Genre}</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieComp;
