import React from 'react'
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import '../styles/EthereumCard.css';

const EthereumCard = () => {
  return (
    <div className="eth-card-container eth-card white-glassmorphism ">
      <div className="eth-icon">
        <SiEthereum fontSize={40} color="#fff" />
        
      </div>
      <div className="eth-help-icon">
        <BsInfoCircle fontSize={25} color="#fff" />
      </div>
      <div className="ethereum-name">
        <p>Ethereum</p>
      </div>
      <div className="ethereum-address">
        <p>Address</p>
      </div>
    </div>
  )
}

export default EthereumCard;
