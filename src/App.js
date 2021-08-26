import React, { useState } from 'react';
import './App.css';
import { useSwapiApi } from './hooks';
import { StarWarsCharacter } from './Components';
import { Container, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardTitle, CardText, Button, Spinner } from 'reactstrap';
import classnames from 'classnames';

function App() {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const { data: character } = useSwapiApi({
    entity: 'people',
    id: 1
  });

  return (
    <div className="App">
      <Container style={{'marginTop': '25px'}}>
        <div>
          <Nav tabs style={{'marginBottom': '25px'}}>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                Characters
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                Worlds
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <StarWarsCharacter character={character} />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </Container>
    </div>
  );
}

export default App;
