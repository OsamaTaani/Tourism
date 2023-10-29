
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import BlogDetails from './components/BlogDetails';
function App() {
  return (
    <Router>
    <div className="App">
    
      <Header/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/blogs/:id' element={<BlogDetails/>}/>
      </Routes>

      <Footer/>
      </div>
      </Router>
   
  );
}

export default App;
