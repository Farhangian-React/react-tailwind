import React from "react";
import TopNavbar from "../Topnav/TopNavbar";
import Footer from "./Footer";
import Stores from "../Stores/Stores";
import Banner from "./Banner";
import Shegeftangiz from "./Shegeftangiz";
import FrequentlyQuestions from "./FrequentlyQuestions";
import BigBanner from "./BigBanner";
function Homepage() {
  return (
    <>
  <TopNavbar/>
  <BigBanner/>
   <Banner/>
   <Shegeftangiz/>
     
      <Stores/>
       <FrequentlyQuestions/> 
     <Footer/>
    </>
  );
}

export default Homepage;
