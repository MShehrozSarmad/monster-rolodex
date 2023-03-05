import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: ''
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        () => {
          return { monsters: users }
        },
        () => console.log(this.state)
      ))
  }

  onsearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString };
    });
  }

  render() {
    //optimization using es6 destructuring
    const {monsters, searchString} = this.state;
    const {onsearchChange} = this;
    //method to filter monsters
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <input className='search-box' placeholder='search monsters' type="search" onChange={
          onsearchChange
        } />
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })}
        {console.log("rendered")}
      </div>
    );
  }
}

export default App;