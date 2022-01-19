import { Fragment, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Graph } from "./Graphs";
import { Graph2 } from "./Graph2";
//import Layout from "./Layout";
import Menu from "./menu";
import { GetLandlords } from "../Landlords/apiLandlords";

const NumberofLandlords = () => {
  const nos = GetLandlords();
  console.log(JSON.stringify(nos.promise));
};

const Card1 = () => (
  <Card
    bg={"success"}
    text={"white"}
    style={{ width: "18rem", height: "12rem" }}
    className="mb-2"
  >
    <Card.Header to="/landlord">
      <h3>Landlords</h3>
    </Card.Header>
    <Card.Body>
      <Card.Title>Number of the Lists in the Box </Card.Title>
      <Card.Text>
        <h2>11</h2>
      </Card.Text>
    </Card.Body>
  </Card>
);

const Card2 = () => (
  <Card
    bg={"warning"}
    text={"black"}
    style={{ width: "18rem", height: "12rem" }}
    className="mb-2"
  >
    <Card.Header to="/Tenets">
      <h3>Tanets</h3>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        <h2>18</h2>
      </Card.Text>
    </Card.Body>
  </Card>
);

const Card3 = () => (
  <Card
    bg={"info"}
    text={"white"}
    style={{ width: "18rem", height: "12rem" }}
    className="mb-2"
  >
    <Card.Header to="/Tenets">
      <h3>Management</h3>
    </Card.Header>
    <Card.Body>
      <Card.Title>Number of the Items </Card.Title>
      <Card.Text>
        {" "}
        <h2>99</h2>
      </Card.Text>
    </Card.Body>
  </Card>
);

const Home = () => {
  useEffect(() => {
    NumberofLandlords();
  }, []);
  return (
    <Fragment>
      <Menu />
      <CenterBox>
        <FlexCardOutline>
          <FlexCards>
            <LinkStyle>
              <Link to="/landlord">
                <Card1 />
              </Link>
            </LinkStyle>
            <Card2 />
            <Card3 />
          </FlexCards>
        </FlexCardOutline>
        <GraphFlex>
          <Graph />
          <Graph2 />
        </GraphFlex>
      </CenterBox>
    </Fragment>
  );
};

export default Home;

const FlexCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const FlexCardOutline = styled.div`
  width: 60rem;
  margin: 20px;
`;

const LinkStyle = styled.div`
  text-decoration: none;
`;

const CenterBox = styled.div`
  display: column;
  align-items: "center";
  margin-left: 150px;
  margin-right: 150px;
  margin-top: 40px;
`;

const GraphFlex = styled.div`
  display: flex;
  flex-direction: row;
`;
//  margin: 10px, 20px, 5px, 20px;
