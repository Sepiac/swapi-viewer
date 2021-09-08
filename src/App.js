import React, { useState } from 'react';
import './App.css';
import { useSwapiApi } from './hooks';
import { Swapiperson, SwapiPlanet } from './Components';
import { Container, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, CardTitle, CardText, Button, Input, Form, FormGroup, Label, FormText } from 'reactstrap';
import classnames from 'classnames';
import SwapiSpecies from './Components/SwapiSpecies';
import { EasyTabs, EasyTab } from './Components/EasyTabs';

function App() {

  const [personId, setPersonId] = useState('1');
  const { data: person } = useSwapiApi({
    entity: 'people',
    id: personId
  });

  const [planetId, setPlanetId] = useState('1')
  const { data: planet } = useSwapiApi({
    entity: 'planets',
    id: planetId
  });

  const [speciesId, setSpeciesId] = useState('1')
  const { data: species } = useSwapiApi({
    entity: 'species',
    id: speciesId
  });

  return (
    <div className="App">
      <Container style={{ 'marginTop': '25px' }}>
        <EasyTabs>
          <EasyTab label="Characters">
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
          </EasyTab>
          <EasyTab label="Planets">
            <Form style={{ textAlign: 'left', marginBottom: '25px' }}>
              <Label htmlFor="world-id">Planet ID</Label>
              <Input id="world-id" value={planetId} onChange={e => {
                setPlanetId(e.target.value);
              }}></Input>
            </Form>
            <Col sm="12">
              <SwapiPlanet planet={planet} />
            </Col>
          </EasyTab>
          <EasyTab label="Species">
            <Form style={{ textAlign: 'left', marginBottom: '25px' }}>
              <Label htmlFor="world-id">Species ID</Label>
              <Input id="species-id" value={speciesId} onChange={e => {
                setSpeciesId(e.target.value);
              }}></Input>
            </Form>
            <Col sm="12">
              <SwapiSpecies species={species} />
            </Col>
          </EasyTab>
        </EasyTabs>
      </Container>
    </div>
  );
}

export default App;
