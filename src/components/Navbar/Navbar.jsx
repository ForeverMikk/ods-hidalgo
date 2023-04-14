import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import './Navbar.css';
import logo from '../../assets/img/logo-4.png';

const Navbar = () => {

    const [navHeight, setNavHeight] = useState(100);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
    
          if (currentScrollY > 0) {
            setNavHeight(60);
            document.querySelector('nav').style.backgroundColor = '#222';
            document.querySelector('img').style.height = '4rem';
        } else {
            setNavHeight(100);
            document.querySelector('nav').style.backgroundColor = '#fff';
            document.querySelector('img').style.height = '5rem';
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    

    return (
        <nav style={{ height: `${navHeight}px` }}>
            <img className='nav-logo' src={logo} alt="Logo ODS" />

            <div className="nav-menu">
                <Button variant='light'>AGENDA 2030</Button>
                <Button variant="light">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </Button>
            </div>
        </nav>
    )
}

export default Navbar;