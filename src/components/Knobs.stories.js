import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

const stories = storiesOf("Knobs", module);
stories.addDecorator(withKnobs);

stories.add("with a button", () => (
  <button disabled={boolean("Disabled", false)}>
    {text("Label", "I can be changed")}
  </button>
));