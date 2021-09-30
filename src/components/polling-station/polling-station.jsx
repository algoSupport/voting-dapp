import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const LoadingCircles =
  "https://motionarray.imgix.net/preview-163378-bNxCdvwW1X-high_0004.jpg";

const PollingStation = ( props ) => {
  const [ candidate1URL, changeCandidate1Url ] = useState( LoadingCircles );
  const [ candidate2URL, changeCandidate2Url ] = useState( LoadingCircles );
  const [ showresults, changeResultsDisplay ] = useState( false );
  const [ candidate1votes, changeVote1 ] = useState( '---' )
  const [ candidate2votes, changeVote2 ] = useState( '---' )



  useEffect( () => {
    const getInfo = async () => {
      let voteCount = await window.contract.getVote( {
        prompt: localStorage.getItem( 'prompt' ),
      } )
      changeVote1( voteCount[ 0 ] )
      changeVote2( voteCount[ 1 ] )

      changeCandidate1Url(
        await window.contract.getUrl( { name: localStorage.getItem( 'Candidate1' ) } )
      )
      changeCandidate2Url(
        await window.contract.getUrl( { name: localStorage.getItem( 'Candidate2' ) } )
      )

      let didUserVote = await window.contract.didParticipate( {
        prompt: localStorage.getItem( 'prompt' ),
        user: window.accountId
      } )
      changeResultsDisplay(
        didUserVote
      )
    }
    getInfo()

  }, [] )

  const addVote = async ( index ) => {
    await window.contract.addVote( {
      prompt: localStorage.getItem( 'prompt' ),
      index: index
    } )
    await window.contract.recordUser( {
      prompt: localStorage.getItem( 'prompt' ),
      user: window.accountId
    } )
    changeResultsDisplay( true )
  }

  return (
    <Container>
      <Row>
        <Col span={ 4 } className=" col-4 jutify-content-center d-flex">
          <Container>
            <Row>
              <div
                style={ {
                  display: "flex",
                  justifyContent: "center",
                  padding: "3vw",
                } }
              >
                <img
                  style={ {
                    height: "15vh",
                    width: "10vw",
                  } }
                  src={ candidate1URL }
                ></img>
              </div>
            </Row>
            { showresults ? (
              <Row className="justify-content-center d-flex">
                <div
                  style={ {
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "4vw",
                    padding: "10px",
                  } }
                >
                  { candidate1votes }
                </div>
              </Row>
            ) : null }
            <Row
              style={ { marginTop: "5vh" } }
              className="justify-content-center d-flex"
            >
              <Button disabled={ showresults } onClick={ () => addVote( 0 ) }>Vote</Button>
            </Row>
          </Container>
        </Col>
        <Col span={ 4 } className="col-4 justify-content-center d-flex align-items-center">
          <div
            style={ {
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#7abdfc",
              height: "20vh",
              alignItems: "center",
              padding: "2vw",
              textAlign: "center",
            } }
          >
            Do you want to reopen college?
          </div>
        </Col>
        <Col className="col-4 jutify-content-center d-flex">
          <Container>
            <Row>
              <div
                style={ {
                  display: "flex",
                  justifyContent: "center",
                  padding: "3vw",
                } }
              >
                <img
                  style={ {
                    height: "15vh",
                    width: "10vw",
                  } }
                  src={ candidate2URL }
                ></img>
              </div>
            </Row>
            { showresults ? (
              <Row className="justify-content-center d-flex">
                <div
                  style={ {
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "4vw",
                    padding: "10px",
                  } }
                >
                  { candidate2votes }
                </div>
              </Row>
            ) : null }
            <Row
              style={ { marginTop: "5vh" } }
              className="justify-content-center d-flex"
            >
              <Button onClick={ () => addVote( 0 ) } disabled={ showresults }>Vote</Button>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default PollingStation;
