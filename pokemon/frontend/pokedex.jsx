import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';

document.addEventListener("DOMContentLoaded", () => {
  
  //testing
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = fetchAllPokemon;

  const root = document.getElementById("root");
  ReactDOM.render(<h1>Working</h1>, root);
})