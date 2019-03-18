import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react/dist/client/preview";
import React from "react";
// import PropTypes from "prop-types";
//  //import { HsIcon } from "./Icons";




// export default props => (
//   <svg width="22" height="22" viewBox="0 0 1024 1024">
//     <path d={icons[props.icon]} />
//   </svg>




storiesOf("Icons", module)
  .add("Trash", () => (
     <svg class="icon-trashcan"><use xlinkHref="#icon-trashcan"></use></svg>
   ));
// // storiesOf("Icons", module)
// //   .add("Trash", () => (
// //     // <div>
// //     //   <HsIcon icon="trashcan" />
// //     // </div>
// //     <svg class="icon-trashcan"><use xlinkHref="#icon-trashcan"></use></svg>
// //   ))