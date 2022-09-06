import React from 'react';
import EthereumCard from './EthereumCard';
import '../styles/Landing.css';

const Landing = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-text">
        <h1 className="text-gradient">Invest in Future</h1>
        <p> Welcome to <span> decentralize</span> and <span> secure </span>crowd funding platform</p>
      </div>
      <div className="landing-art">
        <EthereumCard />
      </div>
    </div>
    
  )
}

export default Landing;
