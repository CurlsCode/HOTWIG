function Map(props) {
  return (
    <div style={{
      border: '2px solid #333',
      height: '400px',
      backgroundColor: '#e8f4f8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '20px'
    }}>
      <div>
        <h2>Map of England & Normandy</h2>
        <p>Year: {props.currentYear}</p>
        <p style={{color: '#666'}}>(Map visualization coming soon)</p>
      </div>
    </div>
  );
}

export default Map;