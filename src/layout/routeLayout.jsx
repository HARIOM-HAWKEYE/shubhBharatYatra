import React from "react";
import Navbar from "../Components/navBar";
import Footer from "../Components/footer"
import WhatsAppButton from "../Components/whatsapp";
import { Outlet } from "react-router-dom";
const RouteLayout =()=>{
    return(
        <div>
            <WhatsAppButton/>   
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>

        </div>
    )
}  
export default RouteLayout;
