import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Header from './components/Header/Header';


//component body
function App() {
  return (
    <div className="App bg-[#fafafa] h-screen">

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

    </div>
  );
}

export default App;
