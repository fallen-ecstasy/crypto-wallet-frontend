import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from './components/NavbarComponent/Navbar'
import Login from './components/LoginComponent/Login'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}>  
        {/* Redirecting Currently Login Page */}
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
