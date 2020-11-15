import './App.css';
import ClassComponent from './classComponent';
import Row1 from './row1';
import Row2 from './row2';

function App(props) {
  const kod = (<div className="App">
    <div className = "calculator-bcg">
      <Row1/>
      <Row2/>
    </div>
</div>);

  return kod;
}

export default App;
<ClassComponent
nameAttribute="1111"
/>