import { useState } from 'react';

function WilliamCard(props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{border: '2px solid black', padding: '20px', margin: '20px'}}>
      <h2>{props.name}</h2>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      
      {showDetails && (
        <div>
          <p>Born: {props.born}</p>
          <p>Died: {props.died}</p>
          <p>Title: {props.title}</p>
        </div>
      )}
    </div>
  );
}

export default WilliamCard;