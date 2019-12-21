import React from 'react';
import AddRegistryButton from './AddRegistryButton';
import List from './List';

const App = () => {
  return (
    <div style={{display: "flex"}}>
      <List />
      <AddRegistryButton circular icon='plus' style={{
        margin: "10px",
        alignSelf: "flex-start"
      }} />
    </div>
  )
}

export default App;