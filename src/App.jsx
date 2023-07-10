import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./bem/header.css";
import "./bem/footer.css";
import "./bem/home.css";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={15000} />
    </BrowserRouter>
  );
}

export default App;
