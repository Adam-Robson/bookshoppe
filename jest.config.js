export default {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.ts?$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testEnvironment: "node"
};