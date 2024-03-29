import React, { children } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Layouts.css";
import { Toaster } from 'react-hot-toast';

//import imageSrc from "../../images/dabb327ce88f9fcc7f707d7d08943724.png"








const Layouts = ({ children }) => {
    return (
      <div >
        <Header/>
     
        <main  style={{ minHeight: "90vh" }}>

          <Toaster/>
          {children}
        
        </main>
        <Footer/>
        
      </div>
    );
}
export default Layouts;