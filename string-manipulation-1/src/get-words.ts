/* exported getWords */

function getWords(input: string): string[] {
  const trimmed = input.trim();

  // Split the string by any amount of spaces (space, tab, etc.)
  const words = trimmed.split(/\s+/);

  // If the input was just spaces or empty, return an empty array
  if (words[0] === '') {
    return [];
  }
  return words;
}
