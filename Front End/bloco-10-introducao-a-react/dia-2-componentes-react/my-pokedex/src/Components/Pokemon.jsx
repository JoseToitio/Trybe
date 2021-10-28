import React from "react";

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

export default Pokemon;
