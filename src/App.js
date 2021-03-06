import logo from './logo.svg';
import './App.css';
import ClassComponent from './classComponent';

function App(props) {
  const kod = (<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Testiramo ReactJS aplikaciju</h1>
      <h3>{props.param}</h3>

      <ClassComponent
          nameAttribute="1111"
      />

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
  </div>);

  return kod;
}

export default App;
