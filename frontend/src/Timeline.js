import { useState } from 'react';

function Timeline(props) {
  return (
    <div style={{padding: '20px', backgroundColor: '#f0f0f0'}}>
      <h3>Timeline: {props.currentYear} AD</h3>
      <input 
        type="range" 
        min="1000" 
        max="1200" 
        value={props.currentYear}
        onChange={(e) => props.setCurrentYear(e.target.value)}
        style={{width: '100%'}}
      />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <span>1000 AD</span>
        <span>1200 AD</span>
      </div>
    </div>
  );
}
export default Timeline;
