import React, { Component } from 'react';
import General from './Components/General'
import Education from './Components/Education'
import Experience from './Components/Experience'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="App">
        <General />
        <Education />
        <Experience />
      </div>
    )
  };
}

export default App;
