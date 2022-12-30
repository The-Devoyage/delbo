import React from "react";
import {
  CHeader,
  CToggler,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CImg,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { initialState } from "../store";

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state: initialState) => state.sidebarShow);

  const toggleSidebarMobile = () => {
    console.log(sidebarShow);
    const val = [false, "responsive", undefined].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  return (
    <>
      <div
        className="d-flex p-3 justify-content-around align-items-center"
        style={{ backgroundColor: "white" }}
      >
        <CImg src="logo.png" className="col-md-12 col-lg-5" />
      </div>
      <CHeader
        withSubheader
        colorScheme="dark"
        className="bg-primary"
        style={{ borderBottom: "#f87d6f" }}
      >
        <CToggler
          inHeader
          className="ml-md-3 d-lg-none"
          onClick={toggleSidebarMobile}
        />

        <CHeaderNav
          className="d-md-down-none mr-auto d-flex w-100 justify-content-center align-items-center"
          style={{ fontSize: "1.15rem" }}
        >
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink to="/">Home</CHeaderNavLink>
          </CHeaderNavItem>
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink to="/our-farm">Our Farm</CHeaderNavLink>
          </CHeaderNavItem>
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink to="/true-or-false">True or False</CHeaderNavLink>
          </CHeaderNavItem>
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink to="/quail-meat">Quail Meat</CHeaderNavLink>
          </CHeaderNavItem>
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink to="/events">Events</CHeaderNavLink>
          </CHeaderNavItem>
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink to="/quail-product">Quail Product</CHeaderNavLink>
          </CHeaderNavItem>
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink to="/menu">Menu</CHeaderNavLink>
          </CHeaderNavItem>
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink to="/recipes">Recipes</CHeaderNavLink>
          </CHeaderNavItem>
        </CHeaderNav>
      </CHeader>
    </>
  );
};

export default TheHeader;
