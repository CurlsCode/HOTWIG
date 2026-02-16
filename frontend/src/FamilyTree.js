function FamilyTree() {
  const family = [
    { name: "Robert I", relation: "Father" },
    { name: "William the Conqueror", relation: "Self" },
    { name: "Matilda of Flanders", relation: "Wife" },
    { name: "Robert II", relation: "Son" },
    { name: "William II", relation: "Son" },
    { name: "Henry I", relation: "Son" }
  ];

  return (
    <div style={{padding: '20px', border: '1px solid #ccc', margin: '20px'}}>
      <h3>Family Tree</h3>
      {family.map((person, index) => (
        <div key={index} style={{
          padding: '10px',
          margin: '5px',
          backgroundColor: person.relation === 'Self' ? '#ffeb3b' : '#f5f5f5',
          borderLeft: '4px solid #2196F3'
        }}>
          <strong>{person.name}</strong> - {person.relation}
        </div>
      ))}
    </div>
  );
}

export default FamilyTree;