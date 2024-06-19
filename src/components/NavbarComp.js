import React from 'react';
import { Link } from 'react-router-dom';
import img from '../image/img.png'
import { Image } from 'react-bootstrap';

const NavbarComp = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  nav1" >
        <div className="container">
          <Link className="navbar-brand" to="/"> 
          <Image src={img} className='w-25 p-3' alt='avg' />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse  navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  ms-auto">
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
