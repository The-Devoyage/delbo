import { useState } from "react";
import {
  CContainer,
  CCard,
  CCollapse,
  CCardBody,
  CCardFooter,
  CButton,
  CCardHeader,
  CCardTitle,
  CRow,
  CCol,
  CImg,
} from "@coreui/react";
import DividerImg from "../../components/DividerImg";
import StyledTitle from "../../components/StyledTitle";
import { questions, TrueFalseQuestion } from "./questions";

const TrueOrFalse = () => {
  const [collapse, setCollapse] = useState<number | null>(null);
  const [currAnswer, setCurrAnswer] = useState<boolean | null>(null);

  const toggle = (id: number | null) => {
    setCollapse(id);
  };

  return (
    <>
      <DividerImg
        backgroundImage="/eggs-image.png"
        backgroundPosition="0 35%"
        backgroundOpacity="1"
      />
      <CContainer
        style={{
          margin: "5rem auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StyledTitle
          text="True or False - Learn about Our Quail Products"
          centered
        />
        <p>
          There are many myths about the value of quail meat and eggs. Test your
          understanding below!
        </p>
      </CContainer>
      <CContainer>
        {questions.map((question: TrueFalseQuestion) => {
          return (
            <CRow style={{ margin: "2rem auto", justifyContent: "center" }}>
              {/* <CCol md="6">
                <CImg src="/FarmView.png" width="100%" />
              </CCol> */}
              <CCol md="6">
                <CCard>
                  <CCardHeader>
                    <CCardTitle className="mb-0">
                      {question.question}
                    </CCardTitle>
                  </CCardHeader>
                  <CCollapse show={collapse === question.id}>
                    <CCardBody>
                      <h4>
                        {currAnswer === question.answer
                          ? "Correct!"
                          : "Not Quite..."}
                      </h4>
                      <p className="text-left">{question.text}</p>
                    </CCardBody>
                  </CCollapse>
                  <CCardFooter className="d-flex justify-content-around">
                    <CButton
                      color="primary"
                      onClick={() => {
                        switch (collapse) {
                          case question.id:
                            setCurrAnswer(null);
                            toggle(null);
                            return;
                          default:
                            setCurrAnswer(true);
                            toggle(question.id);
                            return;
                        }
                      }}
                      className={"mb-1 text-light"}
                    >
                      {collapse === question.id ? "Hide" : "True"}
                    </CButton>
                    {collapse !== question.id && (
                      <CButton
                        color="primary"
                        onClick={() => {
                          switch (collapse) {
                            case question.id:
                              setCurrAnswer(null);
                              toggle(null);
                              return;
                            default:
                              setCurrAnswer(false);
                              toggle(question.id);
                              return;
                          }
                        }}
                        className={"mb-1 text-light"}
                      >
                        {collapse === question.id ? "Hide" : "False"}
                      </CButton>
                    )}
                  </CCardFooter>
                </CCard>
              </CCol>
            </CRow>
          );
        })}
      </CContainer>
    </>
  );
};

export default TrueOrFalse;
