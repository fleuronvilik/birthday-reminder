import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <List people={people} clearAll={() => setPeople([])}/>
    </main>
  );
}

export default App;
