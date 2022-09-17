import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { connectWallet, isWallectConnected } from '../SimpleStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import '../styles/Header.css';
import { useEffect } from 'react';

const Header = () => {
  const [toggler, setToggler] = useState(false);
  const [walledConnected, setWalletConnected] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setToggler(!toggler);
  }

  useEffect(() => {
    // To get the value instead of javascript promise object
    async function run() { 
      const data = await isWallectConnected();
      if( data !== '0x000000000000000000000000') {
        setWalletConnected(true);
        return ;
      }
      setWalletConnected(false);
    }

    const timer = setInterval(() => {
      run();
    }, 1000)

    return () => clearInterval(timer)
  })

  return (
    <div className="header">
      <div className="header-text">
        <h1 className="header-heading" onClick={() => navigate('/')}>Crowd Funding</h1>
      </div>
      <div className={`header-buttons ${ toggler ? ' responsive' : ''}`}>
        <button onClick={connectWallet}>{walledConnected ? 'Connected' : 'Connect To MetaMask'}</button>
        <button onClick={() => navigate("/add-project")}>Add Project</button>
       
      </div>
        { toggler ? 
            <FontAwesomeIcon icon={faXmark} className="toggler" onClick={toggleNavbar} /> :
            <FontAwesomeIcon icon={faBars} className="toggler" onClick={toggleNavbar} />
        }    
    </div>
  )
}

export default Header;
