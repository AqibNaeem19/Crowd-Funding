import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import '../styles/Header.css';

const Header = () => {
  const [toggler, setToggler] = useState(false);

  const toggleNavbar = () => {
    setToggler(!toggler);
  }

  return (
    <div className="header">
      <div className="header-text">
        <h1 className="header-heading">Crowd Funding</h1>
      </div>
      <div className={`header-buttons ${ toggler ? ' responsive' : ''}`}>
        <button>Connect To MetaMask</button>
        <button>Add Project</button>
       
      </div>
        { toggler ? 
            <FontAwesomeIcon icon={faXmark} className="toggler" onClick={toggleNavbar} /> :
            <FontAwesomeIcon icon={faBars} className="toggler" onClick={toggleNavbar} />
        }    
    </div>
  )
}

export default Header;
