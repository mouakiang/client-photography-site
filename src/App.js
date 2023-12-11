import './App.css';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
    </div>
  );
}

export default App;
