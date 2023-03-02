import { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'John'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name}
          </p>
          <button onClick={() => {
            this.setState({name: 'Bob'})
            console.log(this.state.name);
          }}>Change Name</button>
        </header>
      </div>
    );
  }
}


//is same as :
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
