import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/LoginComponent/index'
import Login_Mobile from './mobile-view/Login/index';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login_Mobile/>}>  
        {/* Redirecting Currently Login Page */}
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
