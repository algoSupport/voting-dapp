import { Tab } from "bootstrap";
import React from "react";
import { Table, Container } from "react-bootstrap";
import {Button} from 'antd'

const Home = (props) => {
  const promptList = [
    "Do you want to reopen college?",
    "Who is the better actor?",
  ];

  return (
    <Container>
      <Table style={{ margin: "5vh" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>List of Polls</th>
            <th>Go to Poll</th>
          </tr>
        </thead>
        <tbody>
          {promptList.map((el, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{el}</td>
                <td>
                  {" "}
                  <Button type="primary">Go to Poll</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Home;
