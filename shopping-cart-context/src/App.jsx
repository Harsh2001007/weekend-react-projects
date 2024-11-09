import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Products from "./Pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products></Products>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
