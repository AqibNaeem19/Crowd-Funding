import React from 'react';
import '../styles/ChartBar.css';

const ChartBar = props => {
  let barFillHeight = '0%';
  if(props.totalCost > 0){
    barFillHeight = Math.round((props.collectedCost / props.totalCost) * 100) + '%';
  }

  return (
    <div className="chart">

    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{ height: barFillHeight }}></div>
      </div>
    </div>
    <div className="chart-amount">
      <p><span className="chart-amount-headings">Target : </span>{props.totalCost} Eth</p>
      <p><span className="chart-amount-headings">Backers : </span> {props.backers}</p>
      <p><span className="chart-amount-headings">Expires : </span>{props.expires}</p>
      <p><span className="chart-amount-headings">Collected : </span>{props.collectedCost} Eth</p>
    </div>
    </div>
  )
}

export default ChartBar;