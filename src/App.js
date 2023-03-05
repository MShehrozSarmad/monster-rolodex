import { Component } from 'react';
import './App.css';
import CardList from './componenets/card-list/card-list-component';
import SearchBox from './componenets/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(
        () => {
          return { monsters: users }
        }
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
    const { monsters, searchString } = this.state;
    const { onsearchChange } = this;
    //method to filter monsters
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <SearchBox className='monsters-search-box' placeholder='search monsters' onChangeHandler={onsearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;