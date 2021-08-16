import { CContainer } from "@coreui/react";

export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <CContainer style={{ margin: "5rem auto" }}>
      <h2>CONTACT</h2>
      <div>
        <strong>Phone: </strong>
        <span>(570) 275-1999</span>
      </div>
      <div>
        <strong>Email: </strong>
        <a href="cfdelbo@delbo.com">cfdelbo@delbo.com</a>
      </div>
      <div>
        <strong>Hours of Operation: </strong>
        <span>Monday-Friday, 9 a.m.-5 p.m.</span>
        <span>Weekends by Appointment</span>
      </div>
      <div>
        <strong>Address: </strong>
        <span>53 Moser Rd.</span>
        <span>Danville PA, 17821</span>
      </div>
      <div>
        <strong>Service Area: </strong>
        <span>Danville and Surrounding Areas</span>
      </div>
    </CContainer>
  );
};

export default Contact;
