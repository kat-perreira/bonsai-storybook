import React from "react";
import PropTypes from "prop-types";

export class HsIcon extends Component {

  render(props) {
    const docType = (props.type === 'document') && ('doc-' + props.icon);

    // template for rendering svg icon
    let template = (
      <div class="hsicon__wrapper" {...(props.id && { id: props.id })}>
        <svg aria-hidden="true" focusable="false" {...(docType && { 'class': docType })}>
          <use xlinkHref={`#icon-${props.icon}`} />
        </svg>
      </div>
    );


    if (props.forElement !== true) {
      const classes = props.class ? `hs-icon ${props.class}` : "hs-icon";
      // include wrapper <div class="hs-icon"> for jsx component <HsIcon>
      return (
        <div class={classes} icon={props.icon}
          {...(props.size && { size: props.size })}
          {...(props.circle && { circle: true })}
        >
          {template}
        </div>
      );
    }
    //exclude wrapper <div class="hs-icon"> for element <hs-icon>
    return template;
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