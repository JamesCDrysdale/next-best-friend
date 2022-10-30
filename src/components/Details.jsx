import { Component, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

// This is a class component
class Details extends Component {
  // new feature: class properties
  state = { loading: true, showModal: false };

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

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  // class components MUST have a render function
  // You cannot use hooks here
  render() {
    if (this.state.loading) {
      return <h2>loading...</h2>;
    }

    const { animal, breed, city, state, description, name, images, showModal } =
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
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <a href="#">Yes</a>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
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
