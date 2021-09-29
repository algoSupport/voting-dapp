import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const LoadingCircles =
  "https://motionarray.imgix.net/preview-163378-bNxCdvwW1X-high_0004.jpg";

const PollingStation = (props) => {
  const [candidate1URL, changeCandidate1Url] = useState(LoadingCircles);
  const [candidate2URL, changeCandidate2Url] = useState(LoadingCircles);
  const [showresults, changeResultsDisplay] = useState(false);

  return (
    <Container>
      <Row>
        <Col className="jutify-content-center d-flex">
          <Container>
            <Row>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "3vw",
                }}
              >
                <img
                  style={{
                    height: "15vh",
                    width: "10vw",
                  }}
                  src={candidate1URL}
                ></img>
              </div>
            </Row>
            {showresults ? (
              <Row className="justify-content-center d-flex">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "8vw",
                    padding: "10px",
                  }}
                >
                  3
                </div>
              </Row>
            ) : null}
            <Row
              style={{ marginTop: "5vh" }}
              className="justify-content-center d-flex"
            >
              <Button>Vote</Button>
            </Row>
          </Container>
        </Col>
        <Col className="justify-content-center d-flex align-items-center">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#7abdfc",
              height: "20vh",
              alignItems: "center",
              padding: "2vw",
              textAlign: "center",
            }}
          >
            Do you want to reopen college?
          </div>
        </Col>
        <Col className="jutify-content-center d-flex">
          <Container>
            <Row>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "3vw",
                }}
              >
                <img
                  style={{
                    height: "15vh",
                    width: "10vw",
                  }}
                  src={candidate2URL}
                ></img>
              </div>
            </Row>
            {showresults ? (
              <Row className="justify-content-center d-flex">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "8vw",
                  }}
                >
                  3
                </div>
              </Row>
            ) : null}
            <Row
              style={{ marginTop: "5vh" }}
              className="justify-content-center d-flex"
            >
              <Button>Vote</Button>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default PollingStation;
