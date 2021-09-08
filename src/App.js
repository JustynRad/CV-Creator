import React, { Component } from 'react';
import General from './Components/General'
import Education from './Components/Education'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="App">
        <General />
        <Education />
      </div>
    )
  };
}

export default App;
