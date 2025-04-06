import React from "react";
import {  Routes, Route } from "react-router-dom";
import "./App.css";
import NoPage from "./pages/nopage";
import Stores from "./Stores/Stores";
import {CartProvider} from './Shared/Cart-Context';
import Banner from "./pages/Banner";
import Shegeftangiz from "./pages/Shegeftangiz";
import CartBuyShose from "./CartBuy/CartBuyShose";
import CartBuySuitCase from "./Products/Suitcase/CartBuySuitCase";
import DialogSizes from "./CartBuy/DialogSizes";
import Signin from "./Topnav/Signin";
import AllShose from "./Products/Shose/AllShose";
import Signup from "./Topnav/Signup";
import SuitCase from "./Products/Suitcase/SuitCase";
import SigninXs from "./Topnav/SigninXs";
import AllBag from "./Products/Bag/AllBag";
import AllAck from "./Products/Acksosory/AllAck";
import Homepage from "./pages/Homepage";
import KalezhSh from "./Products/Shose/KalezhSh";
import SportSh from "./Products/Shose/SportSh";
import SandalSh from "./Products/Shose/SandalSh";
import MajlesiSh from "./Products/Shose/MajlesiSh";
import PolB from "./Products/Bag/PolB" ;
import SportB from "./Products/Bag/SportB";
import DastiB from "./Products/Bag/DastiB" ;
import DoshiB from "./Products/Bag/DoshiB" ;
import KolehB from "./Products/Bag/KolehB" ;
import BotSh from "./Products/Shose/BotSh";
import AtrA from "./Products/Acksosory/AtrA";
import GlassA from "./Products/Acksosory/GlassA";
import EndBuy from "./CartBuy/EndBuy";
import SendingMethod from "./pages/SendingMethod";
import PageShegeft from "./pages/PageShegeft";
import Contact from "./Contact"
function App() {
  return (
    <>     <CartProvider>
             <div className="content">
            <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/pageshegeft" element={<PageShegeft />} />
          <Route path="/sendingmethod" element={<SendingMethod />} />
          <Route path="/endbuy" element={<EndBuy />} />
          <Route path="/buy" element={<CartBuyShose />} />
          <Route path="/cartbuysuitcase" element={<CartBuySuitCase />} />
          <Route path="/suitcase" element={<SuitCase />} />
          <Route path="/atra" element={<AtrA />} />
          <Route path="/glassa" element={<GlassA />} />
          <Route path="/allbag" element={<AllBag />} />
          <Route path="/polb" element={<PolB />} />
          <Route path="/sportb" element={<SportB />} />
          <Route path="/dastib" element={<DastiB />} />
          <Route path="/doshib" element={<DoshiB />} />
          <Route path="/kolehb" element={<KolehB />} />
          <Route path="/allshose" element={<AllShose />} />
          <Route path="/allack" element={<AllAck />} />
          <Route path="/signinxs" element={<SigninXs />} />
          <Route path="/botsh" element={<BotSh />} />
          <Route path="/kalezhsh" element={<KalezhSh />} />
          <Route path="/sportsh" element={<SportSh />} />
          <Route path="/sandalsh" element={<SandalSh />} />
          <Route path="/majlesish" element={<MajlesiSh />} />
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
