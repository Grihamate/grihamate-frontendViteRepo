import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/Home";
import Layout from "./component/common/Layout/layout"
import Login from "./component/login";
import RentPage from "./pages/Rent";
import Register from "./component/register";
import ForgotPasswordPassWord from "./component/ForgotPassword";
import { ModalProvider } from "./context/ModalContext";
import  PasswordReset from "./component/RestPassword/index"
import ResetSuccessPage from "./component/ResetSuccessPage";

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
          <Route path="/forgotPassword" element={<ForgotPasswordPassWord/>}/>
          <Route path="/passwordReset" element={<PasswordReset/>}/>
          <Route path="/resetSuccess" element={<ResetSuccessPage/>}/>
        </Routes>
        </ModalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
