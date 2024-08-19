import React from 'react';
import { Link } from 'react-router-dom';
import img from '../image/img.png'
import { Image } from 'react-bootstrap';

const NavbarComp = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark nav1">
        <div class="container">
        <Link className="navbar-brand" to="/"> 
          <Image src={img} className='w-25 p-3' alt='avg' />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
            <li className="nav-item">
                <Link className="nav-link text-light" to="/">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">TV Shows</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">Suggest me &#8594;</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarComp;
