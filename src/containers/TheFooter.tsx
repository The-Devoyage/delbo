import { CContainer, CFooter, CNav, CNavItem, CNavLink } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter className="bg-primary d-flex justify-content-center h-100 p-4">
      <CNav>
        <CNavItem>
          <CNavLink className="text-light h5" to="/">
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink className="text-light h5" to="/our-farm">
            Our Farm
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink className="text-light h5" to="/true-or-false">
            True or False
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink className="text-light h5" to="/quail-meat">
            Quail Meat
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink className="text-light h5" to="/events">
            Events
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink className="text-light h5" to="/quail-product">
            Quail Product
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink className="text-light h5" to="/gourmet-bakery">
            Gourmet Bakery
          </CNavLink>
        </CNavItem>
      </CNav>
      <CContainer className="text-light d-flex flex-column justify-content-center align-items-center">
        <span>53 Moser Rd. Danville PA, 17821</span>
        <span>(570) 284-2512</span>
      </CContainer>
    </CFooter>
  );
};

export default TheFooter;
