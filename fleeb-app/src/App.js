import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header/>
        <h1>Rick and Morty</h1>
      </div>
      <div className="App-main">
        <Main/>
      </div>
    </div>
  );
}

export default App;
