import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PokemonListItem.css';

class PokemonListItem extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div
        className="pokemonListItem"
        onClick={this.props.clickPokemon(this.props.pokemon.id)}
      >
        <img
          src={this.props.pokemon.images}
          alt={this.props.pokemon.description}
        />
        <h4>{this.props.pokemon.name}</h4>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PokemonListItem);
