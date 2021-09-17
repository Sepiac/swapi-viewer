import React, { useState } from 'react'
import { useSwapiApi } from '../hooks'
import { Container, Row, Col, Input, Form, FormGroup, Label, Spinner, Alert } from 'reactstrap'
import { Swapiperson, SwapiPlanet, SwapiSpecies, SwapiStarhip, SwapiVehicle, SwapiFilm, EasyTabs, EasyTab } from '../Components'

export const SwapiTabView = () => {
  const [personId, setPersonId] = useState('1');
  const { data: person, isLoading: isPersonLoading, error: personError } = useSwapiApi({
    entity: 'people',
    id: personId
  })

  const [planetId, setPlanetId] = useState('1')
  const { data: planet, isLoading: isPlanetLoading, error: planetError } = useSwapiApi({
    entity: 'planets',
    id: planetId
  })

  const [speciesId, setSpeciesId] = useState('1')
  const { data: species, isLoading: isSpeciesLoading, error: speciesError } = useSwapiApi({
    entity: 'species',
    id: speciesId
  })

  const [starshipId, setStarshipId] = useState('1')
  const { data: starship, isLoading: isStarshipLoading, error: starshipError} = useSwapiApi({
    entity: 'starships',
    id: starshipId
  })

  const [vehicleId, setVehicleId] = useState('1')
  const { data: vehicle, isLoading: isVehicleLoading, error: vehicleError } = useSwapiApi({
    entity: 'vehicles',
    id: vehicleId
  })

  const [filmId, setFilmId] = useState('1')
  const { data: film, isLoading: isFilmLoading, error: filmError } = useSwapiApi({
    entity: 'films',
    id: filmId
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
              {personError ? <Alert color="danger">{personError.message}</Alert> : isPersonLoading ? <Spinner color="primary" /> : <Swapiperson person={person} />}
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
            {planetError ? <Alert color="danger">{planetError.message}</Alert> : isPlanetLoading ? <Spinner color="primary" /> : <SwapiPlanet planet={planet} />}
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
            {speciesError ? <Alert color="danger">{speciesError.message}</Alert> : isSpeciesLoading ? <Spinner color="primary" /> : <SwapiSpecies species={species} />}
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
            {starshipError ? <Alert color="danger">{starshipError.message}</Alert> : isStarshipLoading ? <Spinner color="primary" /> : <SwapiStarhip starship={starship} />}
          </Col>
        </EasyTab>
        <EasyTab label="Vehicles">
          <Form style={{ textAlign: 'left', marginBottom: '25px' }}>
            <Label htmlFor="vehicle-id">Vehicle ID</Label>
            <Input id="vehicle-id" value={vehicleId} onChange={e => {
              setVehicleId(e.target.value);
            }}></Input>
          </Form>
          <Col sm="12">
            {vehicleError ? <Alert color="danger">{vehicleError.message}</Alert> : isVehicleLoading ? <Spinner color="primary" /> : <SwapiVehicle vehicle={vehicle} />}
          </Col>
        </EasyTab>
        <EasyTab label="Films">
          <Form style={{ textAlign: 'left', marginBottom: '25px' }}>
            <Label htmlFor="film-id">Film ID</Label>
            <Input id="film-id" value={filmId} onChange={e => {
              setFilmId(e.target.value);
            }}></Input>
          </Form>
          <Col sm="12">
            {filmError ? <Alert color="danger">{filmError.message}</Alert> : isFilmLoading ? <Spinner color="primary" /> : <SwapiFilm film={film} />}
          </Col>
        </EasyTab>
      </EasyTabs>
    </Container>
  )
}

export default SwapiTabView;