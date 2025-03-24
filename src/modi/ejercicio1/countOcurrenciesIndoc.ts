import * as fs from 'fs';


/**
 * Function that counts the number of times a word appears in a document
 * @param input_file - The file to read 
 * @param input_word - The word to count
 * @returns The number of times the word appears in the document
 */
function CountConcurrenciesInDoc(input_file: string, input_word: string): number | undefined{
  let counter: number | undefined;
  console.log(`The file is ${input_file} and the word is ${input_word}`);
  fs.readFile(input_file, 'utf-8', (err, data) => {
    if (err) {
      console.log(`Error reading file ${input_file}. The error is: `, err);
      return;
    } else if (data.length === 0) {
      console.log(`No data in file`);
      return;
    }
    const regex = new RegExp(input_word, 'g');
    const matches = data.match(regex);
    counter = matches ? matches.length : 0;
    if (counter === 0) {
      console.log(`The word ${input_word} does not appear in the document`);
      return;
    }
    console.log(`The word ${input_word} appears ${counter} times in the document`);
  });
  return counter;

}
/**
 * Main function
 */
function main() {
  if (process.argv.length < 4) {
    console.log('Use: node countOcurrenciesIndoc.js <file> <word>');
    process.exit(1);
  }
  CountConcurrenciesInDoc(process.argv[2], process.argv[3]);
}

main();
