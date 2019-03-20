import React from "react";
import PropTypes from "prop-types";

export class HsIcon extends React.Component {

  render(props) {
   
    


    // if (props.forElement !== true) {
    //   const classes = props.class ? `hs-icon ${props.class}` : "hs-icon";
    //   // include wrapper <div class="hs-icon"> for jsx component <HsIcon>
    //   return (
    //     <div class={classes} icon={props.icon}
    //       {...(props.size && { size: props.size })}
    //       {...(props.circle && { circle: true })}
    //     >
    //       {template}
    //     </div>
    //   );
    // }
    // console.log("skldjfklsdjfkl");
    // exclude wrapper <div class="hs-icon"> for element <hs-icon>
    //return template;
    // return (<h1>{this.props.icon}</h1>);
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