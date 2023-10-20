import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = () => {
    const names = ["Ibrahim", "Judith", "Joanna"];
    const int = Math.floor(Math.random() * 3);
    return names[int];

  }


  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello { handleNameChange(1) }
        </p>
       
      </header>
    </div>
  );
}

export default App;
