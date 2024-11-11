
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <Header/>

      <Routes>
      <Route path='/' element={<Home />}/> 
      <Route path='/About' element={<About/>}/> 
      <Route path='/Contact' element={<Contact/>}/> 
      </Routes>
      
      <Footer/>
    </Router>
  );
}

export default App;
