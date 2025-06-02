'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  return word === word.toUpperCase();
}
function beforeEach() {
  input = 'LearningFuze';
}
function testReturnsFalseForLearningFuze() {
  beforeEach(); // simulate the test setup
  const result = isUpperCased(input);
  console.log(`isUpperCased("${input}") =>`, result); // should log: false
}
// Run the test
testReturnsFalseForLearningFuze();
