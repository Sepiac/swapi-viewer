import React, { useState } from 'react'
import { useSwapiApi } from '../hooks'
import { Container, Row, Col, Input, Form, FormGroup, Label, Spinner } from 'reactstrap'
import { Swapiperson, SwapiPlanet, SwapiSpecies, EasyTabs, EasyTab } from '../Components'
import SwapiStarhip from './SwapiStarship'

export const SwapiTabView = () => {
  const [personId, setPersonId] = useState('1');
  const { data: person, isLoading: isPersonLoading } = useSwapiApi({
    entity: 'people',
    id: personId
  })

  const [planetId, setPlanetId] = useState('1')
  const { data: planet, isLoading: isPlanetLoading } = useSwapiApi({
    entity: 'planets',
    id: planetId
  })

  const [speciesId, setSpeciesId] = useState('1')
  const { data: species, isLoading: isSpeciesLoading } = useSwapiApi({
    entity: 'species',
    id: speciesId
  })

  const [starshipId, setStarshipId] = useState('1')
  const { data: starship, isLoading: isStarshipLoading } = useSwapiApi({
    entity: 'starships',
    id: starshipId
  })



  return (
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
              {isPersonLoading ? <Spinner color="primary" /> : <Swapiperson person={person} />}
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
            {isPlanetLoading ? <Spinner color="primary" /> : <SwapiPlanet planet={planet} />}
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
            {isSpeciesLoading ? <Spinner color="primary" /> : <SwapiSpecies species={species} />}
          </Col>
        </EasyTab>
        <EasyTab label="Starships">
          <Form style={{ textAlign: 'left', marginBottom: '25px' }}>
            <Label htmlFor="starship-id">Starship ID</Label>
            <Input id="starship-id" value={starshipId} onChange={e => {
              setStarshipId(e.target.value);
            }}></Input>
          </Form>
          <Col sm="12">
            {isStarshipLoading ? <Spinner color="primary" /> : <SwapiStarhip starship={starship} />}
          </Col>
        </EasyTab>
      </EasyTabs>
    </Container>
  )
}
