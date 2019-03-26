import React, { Component } from 'react';
import BerryDisplay from './components/BerryDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        {(() => {
          let nodes: JSX.Element[] = [];
          for (let i = 1; i <= 20; i++) {
            nodes.push(<BerryDisplay
              key={`berry${i}`}
              berryID={i}
            />)
          }
          return (nodes)
        })()}
      </div>
    );
  }
}

export default App;
