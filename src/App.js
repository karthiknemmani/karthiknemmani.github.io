
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/pages/NavBar';
import Landing from './components/pages/Landing';
import Projects from './components/pages/Projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Landing/>
      <Projects/>
    </div>
  );
}


export default App;
