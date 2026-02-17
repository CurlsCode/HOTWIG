import { useState, useEffect } from 'react';

function Map(props) {
  const [territories, setTerritories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/territories/${props.currentYear}`)
      .then(response => response.json())
      .then(data => setTerritories(data.territories));
  }, [props.currentYear]); // Re-fetch when year changes

  return (
    <div style={{
      border: '2px solid #333',
      height: '400px',
      backgroundColor: '#e8f4f8',
      padding: '20px',
      margin: '20px'
    }}>
      <h2>Territories in {props.currentYear}</h2>
      <ul>
        {territories.map((territory, index) => (
          <li key={index} style={{fontSize: '1.2em', margin: '10px'}}>
            {territory}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Map;