import React from 'react';
import { request } from './components/api';
import Row from './components/Row';
import './App.css'
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />

      <Banner />

      <Row title={'Netflix Originals'} fetchURL={request.fetchNetflixOriginals} isLarge={true} />
      <Row title={'Popular'} fetchURL={request.fetchPopular} isLarge={true} />
      <Row title={'Action'} fetchURL={request.fetchAction} isLarge={true} />
      <Row title={'Comedy'} fetchURL={request.fetchComedy} isLarge={true} />
      <Row title={'Crime'} fetchURL={request.fetchCrime} isLarge={true} />
      <Row title={'Mystery'} fetchURL={request.fetchMystery} isLarge={true} />
      <Row title={'Sifi'} fetchURL={request.fetchSifi} isLarge={true} />
    </div>
  );
}

export default App;
