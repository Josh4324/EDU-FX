import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./bem/header.css";
import "./bem/footer.css";
import "./bem/register.css";
import "./bem/home.css";
import "./bem/course.css";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forget from "./pages/Forget";
import Payment from "./pages/Payment";
import Course from "./pages/Course";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forget" element={<Forget />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/forex" element={<Course />} />
        <Route exact path="/page2" element={<Page2 />} />
        <Route exact path="/page3" element={<Page3 />} />
        <Route exact path="/page4" element={<Page4 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={15000} />
    </BrowserRouter>
  );
}

export default App;
