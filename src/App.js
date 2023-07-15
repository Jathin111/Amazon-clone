
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter , Routes,Route}
from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/Home' element={<Home/>}  />  
            <Route path='/Checkout' element={<Checkout/>} />
            
          </Routes>      
        </BrowserRouter>
      </div>
    
  );
}

export default App;