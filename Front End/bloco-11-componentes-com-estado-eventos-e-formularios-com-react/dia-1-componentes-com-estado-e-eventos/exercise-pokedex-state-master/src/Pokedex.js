import React from "react";
import Pokemon from "./Pokemon";
import Button from "./Button";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      filteredType: "all",
    };
  }
  render() {
    return (
      <div className="pokedex">
        {this.props.pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}

export default Pokedex;
