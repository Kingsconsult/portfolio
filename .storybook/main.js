
module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-a11y/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-links/register",
    "@storybook/addon-storysource",
    "@storybook/addon-backgrounds/register"
  ]
};
