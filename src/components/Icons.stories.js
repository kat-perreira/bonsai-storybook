import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react/dist/client/preview";
import React from "react";
import { HsIcon } from "./Icons";


storiesOf("Icons", module)
  .add("Trash", () => (
    <div>
      <HsIcon icon="trashcan" />
    </div>
  ))