
import './App.css';
import Login from './Components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import ProtectedRoute from './Components/ProtectedRoute';
function App() {
  return (
    <div className="App">
      <Routes>
    <Route path='/login' element={<Login/>}/>  
    <Route path='/signup' element={<SignUp/>}/>
   
    <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>

    </Routes>
    </div>

  );
}

export default App;
