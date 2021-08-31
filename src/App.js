import React, { useState } from 'react';
import './App.css';
import { useSwapiApi } from './hooks';
import { Swapiperson, SwapiPlanet } from './Components';
import { Container, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardTitle, CardText, Button, Input, Form, FormGroup, Label, FormText } from 'reactstrap';
import classnames from 'classnames';

function App() {

  const [activeTab, setActiveTab] = useState('1');

  const [personId, setPersonId] = useState('1');

  const [planetId, setPlanetId] = useState('1')

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  const { data: person } = useSwapiApi({
    entity: 'people',
    id: personId
  });

  const { data: planet } = useSwapiApi({
    entity: 'planets',
    id: planetId
  });

  return (
    <div className="App">
      <Container style={{ 'marginTop': '25px' }}>
        <div>
          <Nav tabs style={{ 'marginBottom': '25px' }}>
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
                Planets
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Form style={{ textAlign: 'left', marginBottom: '25px' }}>
                <FormGroup>
                  <Label htmlFor="character-id"> Character ID</Label>
                  <Input id="character-id" value={personId} onChange={e => {
                    setPersonId(e.target.value)
                  }} />
                </FormGroup>
              </Form>
              <Row>
                <Col sm="12">
                  <Swapiperson person={person} />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Form style={{ textAlign: 'left', marginBottom: '25px' }}>
                <Label htmlFor="world-id">Planet ID</Label>
                <Input id="world-id" value={planetId} onChange={e => {
                  setPlanetId(e.target.value);
                }}></Input>
              </Form>
              <Col sm="12">
                <SwapiPlanet planet={planet} />
              </Col>
            </TabPane>
          </TabContent>
        </div>
      </Container>
    </div>
  );
}

export default App;
