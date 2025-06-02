/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  return word === word.toUpperCase();
}

function beforeEach(): void {
  input = 'LearningFuze';
}

function testReturnsFalseForLearningFuze(): void {
  beforeEach(); // simulate the test setup
  const result = isUpperCased(input);
  console.log(`isUpperCased("${input}") =>`, result); // should log: false
}

// Run the test
testReturnsFalseForLearningFuze();
