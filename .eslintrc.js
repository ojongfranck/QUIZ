// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["@react-native-community", "plugin:@typescript-eslint/recommended"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",

    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
  },
};
