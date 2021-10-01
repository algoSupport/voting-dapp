import React from "react";
import { Link } from "react-router-dom";
import { Table, Container } from "react-bootstrap";
import { Button } from "antd";

const Home = ( props ) => {
  const promptList = [
    "Do you want to reopen college?",
    "Who is the better actor?",
  ];

  return (
    <Container>
      <h2>
        Believe in a <strong>cause</strong> <br /> that can change the world?{ " " }
        <br />
        <span className="product-name">Vote Now</span>
        <br />
        on blockchain.
      </h2>
      <br />

      <img
        src="https://scientifica.ch/wp-content/uploads/2021/07/119_provotum-system-xtra-small.png"
        alt=""
        width="600"
        height="400"
      />
      <br />

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>List of Polls</th>
            <th>Go to Poll</th>
          </tr>
        </thead>
        <tbody>
          { promptList.map( ( el, index ) => {
            return (
              <tr key={ index }>
                <td>{ index + 1 }</td>
                <td>{ el }</td>
                <td>
                  { " " }
                  <Button onClick={ () => props.changeCandidates( el ) } type="primary">
                    Go to Poll
                  </Button>
                </td>
              </tr>
            );
          } ) }
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
