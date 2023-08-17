import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./bem/header.css";
import "./bem/footer.css";
import "./bem/register.css";
import "./bem/home.css";
import "./bem/course.css";
import "./bem/payment.css";
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
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";
import PrivateRoute from "./pages/Private";
import { EduProvider } from "./context/context";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <EduProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/forget" element={<Forget />} />

            <Route exact path="/payment" element={<Payment />} />

            <Route
              exact
              path="/forex"
              element={
                <PrivateRoute>
                  <Course />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/page2"
              element={
                <PrivateRoute>
                  <Page2 />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/page3"
              element={
                <PrivateRoute>
                  <Page3 />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/page4"
              element={
                <PrivateRoute>
                  <Page4 />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/page5"
              element={
                <PrivateRoute>
                  <Page5 />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/page6"
              element={
                <PrivateRoute>
                  <Page6 />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/page7"
              element={
                <PrivateRoute>
                  <Page7 />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/page8"
              element={
                <PrivateRoute>
                  <Page8 />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </QueryClientProvider>
      </EduProvider>
      <ToastContainer autoClose={15000} />
    </BrowserRouter>
  );
}

export default App;
