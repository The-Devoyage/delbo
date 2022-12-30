import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardTitle,
  CContainer,
  CCardText,
  CCardImg,
  CRow,
  CCol,
  CBadge,
  CListGroup,
  CListGroupItem,
  CAlert,
} from "@coreui/react";
import StyledTitle from "../../components/StyledTitle";
import { bakeryItems } from "./details/bakeryItems";
import { deliItems } from "./details/deliItems";

const Bakery = () => {
  return (
    <>
      <CContainer className="my-3">
        <CCard className="pt-2">
          <StyledTitle text="Deli Savories" centered />
          <CCardBody>
            <CListGroup>
              {deliItems.map((item) => (
                <CListGroupItem>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>{item.name}</h5>
                    <CBadge
                      color="primary"
                      style={{ color: "white", fontSize: "1rem" }}
                    >
                      {item.price}
                    </CBadge>
                  </div>
                  <p className="w-75">{item.description}</p>
                </CListGroupItem>
              ))}
            </CListGroup>
          </CCardBody>
        </CCard>
      </CContainer>
      <CContainer className="my-3">
        <CCard className="pt-2">
          <StyledTitle text="Gourmet Bakery" centered />
          <CCardBody>
            <CRow>
              {bakeryItems.map((group, index) => (
                <>
                  <h2
                    className={`w-100 text-center ${
                      index !== 0 ? "my-5" : "my-3"
                    }`}
                  >
                    {group.name}
                  </h2>
                  {group.items.map((item) => (
                    <CCol md={4} className="my-2">
                      <CCard className="h-100">
                        <CCardImg
                          src={item.image}
                          style={{
                            height: "40%",
                            objectFit: "cover",
                            objectPosition: "50% 35%",
                          }}
                        />
                        <CCardHeader>
                          <CCardTitle className="mb-0">{item.title}</CCardTitle>
                        </CCardHeader>
                        <CCardBody>
                          <CCardText>{item.description}</CCardText>
                        </CCardBody>
                        <CCardFooter className="d-flex justify-content-between align-items-center">
                          <span>{item.priceDescription}</span>
                          <CBadge
                            color="primary"
                            style={{ color: "white", fontSize: "1rem" }}
                          >
                            {item.price}
                          </CBadge>
                        </CCardFooter>
                      </CCard>
                    </CCol>
                  ))}
                </>
              ))}
            </CRow>
          </CCardBody>
        </CCard>
      </CContainer>
      <CContainer>
        <CAlert color="warning">
          <h3 style={{ color: "black" }}>Allergy Alert</h3>
          <p>
            A list of ingredients is available upon request for all items. Delbo
            Farms cannot be responsible for anyone consuming products with
            ingredients to which they are allergic.
          </p>
        </CAlert>
        <CAlert color="info">
          <h3 style={{ color: "black" }}>Delivery Options</h3>
          <p>
            For larger orders, delivery options are available. Delivery charges
            vary with destination. Prices quoted within are pickup at Delbo
            Farms.
          </p>
        </CAlert>
      </CContainer>
    </>
  );
};

export default Bakery;
