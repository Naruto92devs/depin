import React, { useState, useEffect } from 'react';
import './Navbar.css';
// import logo from '../Images/logo.png'
// import btnarrow from '../Images/btn-arrow.png';

function Navbar() {

  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
        <header className="header" > 
          <nav className='navbar' id={isScrolled ? 'scrolled' : ''} >
            <div className="left-side-menu">
              <a href="/">
                DePin
              </a>
            </div>
            <div className={isActive ? 'center-menu active' : 'center-menu'}>
              <div className='links'>
                <a href="#feature" onClick={toggleClass} className="tg">
                  <li>Feature</li>
                </a>
                <a href="#about" onClick={toggleClass} className="tg">
                  <li>About</li>
                </a>
                <a href="#tokenomics" onClick={toggleClass} className="tg">
                  <li>Tokenomics</li>
                </a>
                <a href="#roadmap" onClick={toggleClass} className="tg">
                  <li>Roadmap</li>
                </a>
              </div>
              <div className='search'>
                <img src='/images/search.png' alt='logo' />
                <input type='text' placeholder='Search...' />
              </div>
              <div className='socials'>
                <a href='/'>
                  <img src='/images/tele.png' alt='logo' />
                </a>
                <a href='/'>
                  <img src='/images/twit.png' alt='logo' />
                </a>
              </div>
              <a href='/' className='btn'>
                Dapp
              </a>
            </div>
            <div onClick={toggleClass} className="navbar-toggle">
              <span className={isActive ? 'active1' : ''} />
              <span className={isActive ? 'active2' : ''} />
              <span className={isActive ? 'active3' : ''} />
            </div>
          </nav>
        </header>
  );
}

export default Navbar;


