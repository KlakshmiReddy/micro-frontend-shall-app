const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  resolve: {
    alias: {
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
      "react-redux": path.resolve(__dirname, "node_modules/react-redux"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"], // Add other extensions if needed
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        ProductList: "ProductList@http://localhost:3001/remoteEntry.js",
        cart: "cart@http://localhost:3003/remoteEntry.js",
      },
      exposes: {},
      shared: ["react", "react-dom", "@reduxjs/toolkit", "react-redux"],
    }),
  ],
};

// Checkout: "Checkout@http://localhost:3000/remoteEntry.js"
