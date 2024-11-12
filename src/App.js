import logo from './logo.svg';
import './App.css';
/* import Termekek from './components/Termekek';
import Kosar from './components/Kosar'; */
import Public from './pages/Public';
import Urlap from './components/Urlap'
import Tablazat from './components/Tablazat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fakestore webáruház</h1>
      </header>
      <main>
        <Tablazat/>
{/*       <Urlap/> */}
      </main>
 
{/*       <Public /> */}
    </div>
  );
}

export default App;