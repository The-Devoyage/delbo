import { CSidebar, CSidebarNav, CSidebarNavItem } from "@coreui/react";
import { useSelector } from "react-redux";
import { initialState } from "../store";
import { useDispatch } from "react-redux";

const TheSidebar = () => {
  const sidebarShow = useSelector((state: initialState) => state.sidebarShow);
  const dispatch = useDispatch();

  return (
    <CSidebar
      show={sidebarShow}
      size="sm"
      colorScheme="dark"
      className="bg-primary"
      onShowChange={() => dispatch({ type: "set", sidebarShow: false })}
    >
      <CSidebarNav>
        <CSidebarNavItem to="/" name="Home" />
        <CSidebarNavItem to="/our-farm" name="Our Farm" />
        <CSidebarNavItem to="true-or-false" name="True or False" />
        <CSidebarNavItem to="quail-meat" name="Quail Meat" />
        <CSidebarNavItem to="events" name="Event" />
        <CSidebarNavItem to="quail-product" name="Quail Products" />
        <CSidebarNavItem to="menu" name="Menu" />
      </CSidebarNav>
    </CSidebar>
  );
};

export default TheSidebar;
