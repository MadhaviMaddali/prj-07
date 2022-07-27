import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import Product from '../src/components/Product/Product'
import Values from '../src/components/Values/Values'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
    </div>
    <Routes>
    <Route exact path="/product" element={<Product/>}/> 
    <Route exact path="/values" element={<Values/>}/> 
    </Routes>
    <Footer/>
    </Router>
    
  );
}

export default App;
