import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withA11y } from '@storybook/addon-a11y';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";


export default {
  title: 'Button',
  component: Button,
  decorators: [withA11y, withKnobs],
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯 
    </span>
  </Button>
);

// Knobs for React props
export const withAButton = () => (
  <button disabled={boolean("Disabled", false)}>
    {text("Label", "Hello Storybook")}
  </button>
);

// Knobs as dynamic variables.
export const asDynamicVariables = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};

export const first = () => (
  <button onClick={linkTo('Button', 'second')}>Go to "Second"</button>
);
export const second = () => (
  <button onClick={linkTo('Button', 'first')}>Go to "First"</button>
);