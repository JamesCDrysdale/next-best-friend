// Can be written with a functional component
// Making it with a class function experimentally

import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets=images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index, // The + converts the index, which is a string to a number
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="species" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              onClick={this.handleIndexClick} // not ideal to do it this way as it is not accessible to screen readers
              key={photo}
              src={photo}
              data-index={index}
              className={index === active ? "active" : ""}
              alt="pet thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
