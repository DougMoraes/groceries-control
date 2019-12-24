import React from 'react';
import AddRegistryModal from './AddRegistryModal';
import List from './List';

const App = () => {
  return (
    <div style={{display: "flex"}}>
      <List />
      <AddRegistryModal />
    </div>
  )
}

export default App;