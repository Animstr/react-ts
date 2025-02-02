module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      '@babel/preset-typescript',
      ['@babel/preset-react', {runtime: 'automatic'}],
    ],
    plugins: [
      ["react-css-modules", {
        "generateScopedName": "[name]__[local]___[hash:base64:5]"
      }],
    ]
  };