import "regenerator-runtime/runtime";
import React from "react";
import "./global.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Row, Col } from "antd";
import getConfig from "./config";
import Navbar from "./components/navbar/navbar";
import SiderBar from "./components/sidebar/sidebar";
import NewPoll from "./components/new-poll/new-poll";
import PollingStation from "./components/polling-station/polling-station";
import Home from "./components/Home/home";
const { networkId } = getConfig( process.env.NODE_ENV || "development" );

export default function App() {

  const changeCandidatesFunction = async ( prompt ) => {
    console.log( prompt )
    let namePair = await window.contract.getCandidatePair( { prompt: prompt } );
    localStorage.setItem( "Candidate1", namePair[ 0 ] );
    localStorage.setItem( "Candidate2", namePair[ 1 ] );
    localStorage.setItem( "prompt", prompt );
    window.location.replace( window.location.href + "polling-station" )

  }

  return (
    <Router>
      <Navbar />
      <div style={ { padding: "100px" } }>
        <Row>
          <Col span={ 8 }>
            <SiderBar />
          </Col>
          <Col span={ 16 }>
            <Switch>
              <Route exact path="/" >
                <Home changeCandidates={ changeCandidatesFunction } />
              </Route>
              <Route exact path="/new-poll" component={ NewPoll } />
              <Route exact path="/polling-station" component={ PollingStation } />
            </Switch>
          </Col>
        </Row>
      </div>
    </Router>
  );
}
