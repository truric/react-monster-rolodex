import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor() {
    super();

    this.state = {
      camaras: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ camaras: users }));
  }

  // handleChange(e) {
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render(){
    const { camaras, searchField } = this.state;
    const filterCamaras = camaras.filter(camara => 
      camara.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
      <SearchBox 
        placeholder='search monsters'
        handleChange={this.handleChange}
      />
      <CardList camaras={filterCamaras} />
      </div>
    );
  }
}

export default App;
