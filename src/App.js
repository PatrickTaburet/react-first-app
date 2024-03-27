import React, { Component } from 'react';
import './App.css';
import MyCars from './components/MyCars';

class App extends Component {
  state = {
    titre: "Mon catalogue de voitures",
    color: "green"
  }
  handleClick = () => {
    if (this.state.titre !== "I want to break FREE"){
      this.setState({titre: "I want to break FREE"})
    } else {
      this.setState({titre:"Mon catalogue de voitures"});
    }
  }

  changeTitle = (title) => {
    this.setState({
      titre : title
    })
  }
  changeViaBind = (param) => {
    this.setState({
      titre : param
    })
  }
  changeViaInput = (e) => {
    this.setState({
      titre : e.target.value
    })
  }
  render(){
    return (
      <div className="App">
        <MyCars 
          title= {this.state.titre}
          color= {this.state.color}
        />
        <button onClick={this.handleClick}>Change the Title</button>
        <button onClick={this.changeViaBind.bind(this, "I sing under the rain" )}>Change again</button>
        <input type='text' onChange={this.changeViaInput} value={this.state.titre}></input>
      </div>
    );
  }
}

export default App;
