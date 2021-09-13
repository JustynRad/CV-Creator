import React, { Component } from 'react';
import General from './Components/General'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import "./styles/styles.css"

class App extends Component {
  render() {
    return (
      <div id="App">
        <main>
          <General />
          <Education />
          <Experience />
          <Skills />
        </main>
      </div>
    )
  };
}

export default App;
