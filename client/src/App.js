// dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";

// style
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

// pages
import LandingPage from "./pages/LandingPage";
import DetailProduct from "./pages/DetailProductPage";
import Cart from "./pages/CartPage";
import Profile from "./pages/Profile";
import AddProduct from "./pages/AddProduct"
import AddToping from "./pages/AddToping";
import Transaction from "./pages/Transaction";
import { setAuthToken } from "./config/api";

// Init token on axios every time the app is refreshed
if (localStorage.token) {
  setAuthToken(localStorage.token)
}


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail-product/:id" element={<DetailProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/add-toping" element={<AddToping />} />
          <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
