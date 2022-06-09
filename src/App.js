import logo from './sword.jpeg';
import './App.css';
import Profile from './profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Picture setstate</p>
      </header>
      <Profile/>
    </div>
  );
}

export default App;
