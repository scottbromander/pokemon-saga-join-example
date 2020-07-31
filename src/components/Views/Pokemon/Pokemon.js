import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Pokemon.css';

class Pokemon extends Component {
  state = {
    pokemon: {
      types: [],
    },
    updateNeeded: false,
  };

  componentDidMount() {
    if (this.props.store.pokemonReducer.length == 0) {
      return this.setState(
        {
          updateNeeded: true,
        },
        () => {
          console.log('Update needed!', this.state.updateNeeded);
          this.props.dispatch({ type: 'GET_POKEMON' });
        }
      );
    }

    this.updatePokemon();
  }

  updatePokemon() {
    let currentId = this.props.match.params.id;
    let currentPokemon = {};

    for (let pokemon of this.props.store.pokemonReducer) {
      if (currentId == pokemon.id) {
        currentPokemon = pokemon;
      }
    }

    console.log('Yerp');

    this.setState(
      {
        pokemon: currentPokemon,
        updateNeeded: false,
      },
      () => {
        document.title = this.state.pokemon.name;
        console.log(this.state.pokemon);
      }
    );
  }

  backClicked = (event) => {
    this.props.history.push('/');
  };

  render() {
    if (this.state.updateNeeded && this.props.store.pokemonReducer.length > 0) {
      this.updatePokemon();
    }

    const typesArray = this.state.pokemon.types
      ? this.state.pokemon.types.map((item, index) => {
          return <span>{item.toUpperCase()} </span>;
        })
      : [];

    return (
      <div className="currentPokemon">
        <div>
          <button onClick={this.backClicked}>BACK</button>
        </div>
        <img src={this.state.pokemon.images} />
        <h1>{this.state.pokemon.name}</h1>
        <h6>Types: {typesArray}</h6>
        <p>{this.state.pokemon.description}</p>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Pokemon);
