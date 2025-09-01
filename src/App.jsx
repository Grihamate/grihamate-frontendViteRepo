import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/Home";
import Layout from "./component/common/Layout/layout";
import Login from "./component/login";
import RentPage from "./pages/Rent";
import Register from "./component/register";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from "./component/ForgotPassword";
import { ModalProvider } from "./context/ModalContext";
import  PasswordReset from "./component/RestPassword/index"
import ResetSuccessPage from "./component/ResetSuccessPage";
import SetPassword from  "./component/SetPassword/index"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 👇 This will make toasts available app-wide */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

       <ModalProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="rent" element={<RentPage />} />
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} /> {/* 👈 add route */}
          <Route path="/forgotPassword" element={<ForgotPassword/>}/>
          <Route path="/resetPassword" element={<PasswordReset/>}/>
       <Route path="/resetPassword/:token" element={<SetPassword />} />
          <Route path="/resetSuccess" element={<ResetSuccessPage/>}/>
        </Routes>
        </ModalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

