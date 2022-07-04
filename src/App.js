import React from 'react';
import './App.css';

// import useLocalStorage from 'use-local-storage';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';

function App() {

  return (
    <div className="App">
       {/* <div className='btn'>
        <button onClick={toggleStyle} type="button" class="btn btn-primary mx-2">{btntxt}</button>
       </div> */}
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
