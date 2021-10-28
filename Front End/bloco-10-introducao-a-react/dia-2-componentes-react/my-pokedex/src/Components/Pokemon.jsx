import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <section>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{`AverageWeight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <div>
          <img src={image} alt={name} />
        </div>
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};


export default Pokemon;
