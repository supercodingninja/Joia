module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ["/node_modules"],
  testRegex: "/src/tests/.*\\.(test|spec)?\\.(ts|tsx|js)$"
};
