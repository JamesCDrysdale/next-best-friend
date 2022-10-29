import { Component, useEffect } from "react";
import { useParams } from "react-router-dom";

// This is a class component
class Details extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

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

    const { species, breed, city, state, description, name } = this.state;

    return (
      <div className="details">
        <h1>{name}</h1>
        <h2>
          {species} - {breed}
        </h2>
        <h2>
          {city} - {state}
        </h2>
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  return <Details params={params} />;
};

export default WrappedDetails;
