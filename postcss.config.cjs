export const plugins = [
  require('module'),
  require("autoprefixer")({
    grid: true,
  }),
  require("postcss-nested"),
  require("postcss-preset-env"),
  require("cssnano")({
    preset: "default",
  }),
];
