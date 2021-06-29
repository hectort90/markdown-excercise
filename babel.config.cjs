
const babelConfig = {
  presets: [
    ['@babel/preset-env', {
      targets: { node: '12.0' },
      useBuiltIns: "entry",
      corejs: "3.8",
   }],
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-private-methods",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-do-expressions",
    "@babel/plugin-proposal-logical-assignment-operators",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",
    [
      '@babel/plugin-transform-runtime',
      {

        // helpers:      true,
        // regenerator:  true,
        // useESModules: true,
      },
    ],
  ],
}

module.exports = babelConfig
