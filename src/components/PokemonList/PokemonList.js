import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PokemonList.css';
import PokemonListItem from '../PokemonListItem/PokemonListItem';

class PokemonList extends Component {
  render() {
    const pokemonListHtmlArray = this.props.store.pokemonReducer.map(
      (item, index) => {
        return (
          <PokemonListItem
            key={index}
            pokemon={item}
            clickPokemon={this.props.clickPokemon}
          />
        );
      }
    );

    return <div>{pokemonListHtmlArray}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PokemonList);
