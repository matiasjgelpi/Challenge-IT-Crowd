import './App.css';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <MainPage></MainPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
