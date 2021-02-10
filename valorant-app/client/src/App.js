import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Leaderboard from './components/leaderboard';


class App extends Component {
  state = {
    valContent: ''
  };

  componentDidMount() {
    this.getValorantContent()
      .then(res => {
        this.setState({ valContent: res });
        console.log("app content: ", this.state.valContent);
      })
      .catch(err => console.log(err));
  };

  getValorantContent = async () =>  {
    const response = await fetch('/riot-games/val/content');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  showLeadBoard = () => {
    if(this.state.valContent){
      return <Leaderboard valContent = {this.state.valContent} />
    }else {
      return <p>No leader board data </p>
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        { this.showLeadBoard() }
      </div>
    );
  }
}

export default App;
