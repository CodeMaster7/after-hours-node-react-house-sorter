import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      g: {},
      h: {},
      r: {},
      s: {},
      house: '',
      id: '',
      property: '',
      value: ''
    }
  }

  componentDidMount() {
    axios.get('/api/houses').then(this.handleHouseUpdate)
  }

  handleHouseUpdate = ({data}) => {
      this.setState({
        g: data.g,
        h: data.h,
        r: data.r,
        s: data.s
      })
  }

  updateUser() {
    axios.put(`/api/houses/${this.state.id}`, {house:this.state.house, property: this.state.property, value: this.state.value})
    .then(this.handleHouseUpdate)
  }

  handleChange(property, value) {
    this.setState({
      [property]: value
    })
  }


  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>



        ID: <input type="text" onChange={(e) => {this.handleChange('id', e.target.value)}} value={this.state.id}/>
        House: <input type="text" onChange={(e) => {this.handleChange('house', e.target.value)}} value={this.state.house}/>
        Property: <input type="text" onChange={(e) => {this.handleChange('property',e.target.value)}} value={this.state.property}/>
        Value: <input type="text" onChange={(e) => {this.handleChange('value', e.target.value)}} value={this.state.value}/>
        <button onClick={() => {this.updateUser()}}>update User</button>

      </div>
    );
  }
}

export default App;


