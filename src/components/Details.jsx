import { Component, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

// This is a class component
class Details extends Component {
  // new feature: class properties
  state = { loading: true };

  // This is how you would create a constructor in a normal class.
  // I have refactored it, above, using a new feature: Class properties
  //   constructor(props) {
  //     super(props);

  //     this.state = { loading: true };
  //   }

  //lifecyle
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();

    this.setState(Object.assign({ loading: false }, json.pets[0]));
    // Written alternatively using object spread ...
    // this.setState( { loading: false, ...json.pets[0] } );
  }

  // class components MUST have a render function
  // You cannot use hooks here
  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { animal, breed, city, state, description, name, images } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed}
          </h2>
          <h2>
            {city} - {state}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
