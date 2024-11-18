import React from 'react'
import {useState} from "react"
import { NavLink, Link } from 'react-router-dom'
import Hamburger from './Hamburger'

function Navigation() {

  const [hamburgerOpen, setHamburgerOpen] = useState( false )

  const closeMenu = () => {
    console.log("heddj");
    
    setHamburgerOpen(false)
  }

  const toggleHamburger = () => {
    console.log("hej");
    
    setHamburgerOpen( !hamburgerOpen)
  } 

  return ( <>
    <nav>
    <ul className="navigation">
    <li>
        <NavLink onClick={closeMenu} to="/" exact="true" className="nav-link" activeclassname="active">Hem</NavLink>
      </li>
      <li>
        <NavLink onClick={closeMenu} to="/about" className="nav-link" activeclassname="active">Om mig</NavLink>
      </li>
      <li>
        <NavLink onClick={closeMenu} to="/projects" className="nav-link" activeclassname="active">Projekt</NavLink>
      </li>
      <li>
        <NavLink onClick={closeMenu} to="/hobbys" className="nav-link" activeclassname="active">Hobby</NavLink>
      </li>
      <li>
        <NavLink onClick={closeMenu} to="/contact" className="nav-link" activeclassname="active">Kontakt</NavLink>
      </li>
    </ul>
    <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
    </div>
  </nav>

   <style jsx>{
    `@media only screen and (max-width: 480px){
        .navigation {
          display: ${hamburgerOpen ? 'flex' : 'none'};
          width: 30vw;
          margin: 50px 5px 0 0;
          flex-direction: column;
          gap: 5px;
          position: absolute;
          right: 0px;
          font-size: 1.5rem;
          z-index: 99;
          border-radius: 10px;
        }

        {/* .navigation li {
          margin-top: 5px;
        } */}

        .navigation a {
         color: whitesmoke;
        }
      }`

    }</style>
    </>
  );
}

export default Navigation;
