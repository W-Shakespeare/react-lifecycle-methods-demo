import React from "react";
import { pets } from "./pets";
const style = {
  width: "100%",
  border: "2px solid grey",
};

const Dog = (props) => <img style={style} src={props.image} />;

const Cat = (props) => <img style={style} src={props.image} />;

const Pet = ({ animal }) => {
  return (
    <div>
      {animal.isDog ? (
        <Dog image={animal.image} />
      ) : (
        <Cat image={animal.image} />
      )}
    </div>
  );
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets,
    };
  }

  render() {
    return (
      <div>
        {this.state.pets.map((animal) => {
          return <Pet animal={animal} />;
        })}
      </div>
    );
  }
}
