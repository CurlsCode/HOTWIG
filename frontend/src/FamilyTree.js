import { useState, useEffect } from 'react';

function FamilyTree() {
  const [family, setFamily] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when component loads
    fetch('http://localhost:8000/api/family')
      .then(response => response.json())
      .then(data => {
        setFamily(data);
        setLoading(false);
      });
  }, []); // Empty array = run once when component loads

  if (loading) {
    return <div>Loading family tree...</div>;
  }

  return (
    <div style={{padding: '20px', border: '1px solid #ccc', margin: '20px'}}>
      <h3>Family Tree</h3>
      {family.map((person, index) => (
        <div key={index} style={{
          padding: '10px',
          margin: '5px',
          backgroundColor: person.relation === 'Self' ? '#ffeb3b' : '#f5f5f5',
          border: '4px solid #2196F3'
        }}>
          <strong>{person.name}</strong>
          <br />
          <small>{person.born} - {person.died}</small>
        </div>
      ))}
    </div>
  );
}

export default FamilyTree;