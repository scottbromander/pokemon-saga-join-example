import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Pokemon.css';

class Pokemon extends Component {
  state = {
    pokemon: {
      types: [],
    },
  };

  componentDidMount() {
    console.log(this.props.match.params.id);

    let currentId = this.props.match.params.id;
    let currentPokemon = {};

    for (let pokemon of this.props.store.pokemonReducer) {
      console.log(currentId);
      console.log(pokemon);
      if (currentId == pokemon.id) {
        currentPokemon = pokemon;
      }
    }

    this.setState(
      {
        pokemon: currentPokemon,
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
