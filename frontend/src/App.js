import { useState } from 'react';
import Timeline from './Timeline';
import Map from './Map';
import FamilyTree from './FamilyTree';
import './App.css' 

function App() {
  const [currentYear, setCurrentYear] = useState(1066);

  return (
    <div className="App">
      <h1>History of the World I Guess</h1>
      
      <Timeline currentYear={currentYear} setCurrentYear={setCurrentYear} />
      
      <div style={{display: 'flex', gap: '20px'}}>
        <div style={{flex: 1}}>
          <Map currentYear={currentYear} />
        </div>
        <div style={{flex: 1}}>
          <FamilyTree />
        </div>
      </div>
    </div>
  );
}

export default App;