import React, { Component } from 'react';
import BerryDisplay from './components/BerryDisplay';
import './styles/index.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav>
          <header>
            Subtle Backgrounds by <a href="https://www.toptal.com/designers/subtlepatterns">Toptal</a> | Berries and Artwork by <a href="http://www.gamefreak.co.jp/">GameFreak</a> | Design by <a href="https://github.com/misnina">Nina</a>
          </header>
        </nav>
        {(() => {
          let nodes: JSX.Element[] = [];
          for (let i = 1; i <= 64; i++) {
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
