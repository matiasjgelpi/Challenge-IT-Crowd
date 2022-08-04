import './App.css';
import MainPage from './components/MainPage';
import ProductDetail from './components/ProductDetail';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
