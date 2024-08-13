"use client";

import { Provider } from "react-redux";
import store from "@/store";
import Header from "@/components/header";
import MainContext from "@/components/main";
import Footer from "@/components/footer";
// import Shopex from "../components/Shopex"
// import NavLinks from "@/components/nav-links";
// import Navbar from "@/components/Navigation";


export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
    
      <Header />
     
      {children}
     
      <Footer /> 
      
    </Provider>
  );
}
