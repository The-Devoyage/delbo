import { CButton, CContainer, CInput, CRow, CTextarea } from "@coreui/react";
import { Field, Formik } from "formik";
import emailjs from "emailjs-com";

export interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const handleSubmit = async () => {
    const send = await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID!,
      "template_3680j4e",
      {},
      process.env.REACT_APP_EMAILJS_USER_ID
    );
  };

  return (
    <CContainer
      className="d-flex flex-column"
      style={{ margin: "2rem auto 2rem auto" }}
    >
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          message: "",
        }}
        onSubmit={(v) => console.log(v)}
      >
        {(form) => (
          <>
            <div className="d-flex w-100 my-2">
              <Field
                name="first_name"
                className="mr-1"
                as={CInput}
                onChange={form.handleChange}
                placeholder="First Name"
              />
              <Field
                name="last_name"
                as={CInput}
                onChange={form.handleChange}
                placeholder="Last Name"
              />
            </div>
            <Field
              name="email"
              type="email"
              as={CInput}
              onChange={form.handleChange}
              placeholder="Email Address"
              className="my-2"
            />
            <Field
              name="phone"
              type="phone"
              as={CInput}
              onChange={form.handleChange}
              placeholder="Phone Number"
              className="my-2"
            />
            <Field
              name="message"
              as={CTextarea}
              onChange={form.handleChange}
              placeholder="Write a message..."
              className="my-2"
            />
            <CContainer className="d-flex justify-content-end align-items-end px-0 pt-3">
              <CButton color="primary" className="text-light">
                Submit
              </CButton>
            </CContainer>
          </>
        )}
      </Formik>
    </CContainer>
  );
};

export default ContactForm;
