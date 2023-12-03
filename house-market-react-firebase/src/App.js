import HomePage from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>

        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/offers" element={<Offers></Offers>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/forgot-password" element={<ForgetPassword></ForgetPassword>}></Route>
        <Route path="/profile" element={<PrivateRoute></PrivateRoute>}>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
