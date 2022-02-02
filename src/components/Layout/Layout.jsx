import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import ModalContainer from "./ModalContainer";
import { useSelector } from "react-redux";
//component layout baraye zamany hast ke mikhaym taeen konim kodom component ha dar hameye sefhe ha tekrar shavand
const Layout = () => {
    const showModal=useSelector((state)=>state.modalReducer.modal)

  return (
    <>
      <Header />
      {/*{children}*/}
      <Outlet />
      {/*<Footer/>*/}
      {
        showModal&&
          <ModalContainer>{showModal}</ModalContainer>
    
    }
      
    </>
  );
};

export default Layout;
