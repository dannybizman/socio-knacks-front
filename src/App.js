import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />

     <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
     
    </Routes>
    <Footer />
    </BrowserRouter>
        
    </>
  );
}

export default App;
