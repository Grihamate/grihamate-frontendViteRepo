import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/Home";
import Layout from "./component/common/Layout/layout"
import Login from "./component/login";
import RentPage from "./pages/Rent";
import Register from "./component/register";
import { ModalProvider } from "./context/ModalContext";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <ModalProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} /> 
            <Route path="rent" element={<RentPage/>} />
          </Route>
      
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} /> {/* 👈 add route */}
        </Routes>
        </ModalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
