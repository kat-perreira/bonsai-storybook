import React from "react";
import PropTypes from "prop-types";

export class HsIcon extends React.Component {

  render(props) {
  
    return (
      <svg class={"icon-" + this.props.icon}>
        <use xlinkHref={"#icon-" + this.props.icon}/>
      </svg>
    );
  }
}
HsIcon.propTypes = {
  icon: PropTypes.string.isRequired,     // required name of svg icon
  circle: PropTypes.bool,                  // circle around icon
  size: PropTypes.string,                // icon sizetyp
  type: PropTypes.string,                // icon type ['document']
  id: PropTypes.string,                // optional id
  class: PropTypes.string,                // optional classes
  forElement: PropTypes.bool,                  // render for element (exclude wrapper tag)
};