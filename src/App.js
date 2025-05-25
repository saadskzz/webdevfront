
import './App.css';
import Login from './Components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
function App() {
  return (
    <div className="App">
      <Routes>
    <Route path='/login' element={<Login/>}/>  
    <Route path='signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
