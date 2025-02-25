import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NoPage from "./pages/nopage";
import Stores from "./Stores/Stores";
import {CartProvider} from './Shared/Cart-Context';
import Banner from "./pages/Banner";
import Shegeftangiz from "./pages/Shegeftangiz";
import CartBuyShose from "./CartBuy/CartBuyShose";
import DialogSizes from "./CartBuy/DialogSizes";
import Signin from "./Topnav/Signin";
import AllShose from "./Products/Shose/AllShose";
import Signup from "./Topnav/Signup";
import SuitCase from "./Products/Suitcase/SuitCase";
import SigninXs from "./Topnav/SigninXs";
import AllBag from "./Products/Bag/AllBag";
import AllAck from "./Products/Acksosory/AllAck";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <>     <CartProvider>
             <div className="content">
            <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/buy" element={<CartBuyShose />} />
          <Route path="/suitcase" element={<SuitCase />} />
          <Route path="/allbag" element={<AllBag />} />
          <Route path="/allshose" element={<AllShose />} />
          <Route path="/allack" element={<AllAck />} />
          <Route path="/signinxs" element={<SigninXs />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
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
