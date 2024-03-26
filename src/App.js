import React, { Component } from 'react';
import './App.css';
import MyCars from './components/MyCars';

class App extends Component {
  state = {
    titre: "Mon catalogue de voitures",
    color: "green"
  }
  handleClick = () => {
    if (this.state.titre == "Mon catalogue de voitures"){
      this.setState({titre: "I want to break FREE"})
    } else {
      this.setState({titre:"Mon catalogue de voitures"});
    }
    
  }
  render(){
    return (
      <div className="App">
        <MyCars 
          title= {this.state.titre}
          color= {this.state.color}
        />
        <button onClick={this.handleClick}>Change the Title</button>
      </div>
    );
  }
}

export default App;
