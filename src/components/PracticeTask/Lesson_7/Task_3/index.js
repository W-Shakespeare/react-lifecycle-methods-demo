import React from "react";
import { pets } from "./pets";
const style = {
  width: "100%",
  border: "2px solid grey",
};

const Dog = ({ image, none }) => {
  return <img alt={"dog"} style={{ ...style, display: none }} src={image} />;
};

const Cat = ({ image, none }) => {
  return <img alt={"cat"} style={{ ...style, display: none }} src={image} />;
};

const Pet = ({ animal, onlyDog, onlyCat, allAnimals }) => {
  return (
    <div>
      {animal.isDog ? (
        <Dog none={allAnimals || onlyDog || "none"} image={animal.image} />
      ) : (
        <Cat none={allAnimals || onlyCat || "none"} image={animal.image} />
      )}
    </div>
  );
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onlyDog: false,
      onlyCat: false,
      allAnimals: true,
    };
  }

  show = (curr, onlyDog = false, onlyCat = false, allAnimals = false) => {
    this.setState({
      onlyDog,
      onlyCat,
      allAnimals,
    });
    this.setState({
      [curr]: true,
    });
  };
  render() {
    return (
      <div>
        {pets.map((animal) => {
          return (
            <Pet
              animal={animal}
              onlyDog={this.state.onlyDog}
              onlyCat={this.state.onlyCat}
              allAnimals={this.state.allAnimals}
            />
          );
        })}
        {Object.keys(this.state).map((btnAnimal) => (
          <button
            key={btnAnimal.toString()}
            onClick={() => this.show(btnAnimal)}
          >
            {btnAnimal}
          </button>
        ))}
      </div>
    );
  }
}
