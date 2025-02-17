import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/home";
import Portfolio from "./pages/portfolio";
import NoPage from "./pages/nopage";
import Stores from "./Stores/Stores";
import {CartProvider} from './Shared/Cart-Context';
import Banner from "./pages/Banner";
import Shegeftangiz from "./pages/Shegeftangiz";
import CartBuyShose from "./CartBuy/CartBuyShose";
import DialogSizes from "./CartBuy/DialogSizes";
import Signin from "./Topnav/Signin";
import Signup from "./Topnav/Signup";
import SuitCase from "./Products/Suitcase/SuitCase";
function App() {
  return (
    <>     <CartProvider>
             <div className="content">
            <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/buy" element={<CartBuyShose />} />
          <Route path="/suitcase" element={<SuitCase />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NoPage />} />
          <Route path='/dialogSizes' exact element={<DialogSizes/>} />
          <Route path='/Stores' exact element={<Stores/>} />
          <Route path='/banner' exact element={<Banner/>} />
          <Route path='/shegeftangiz' exact element={<Shegeftangiz/>} />
        </Routes>
        </div>
        </CartProvider>
    </>
  );
}

export default App;
