import * as fs from 'fs';

/**
 * Function that converts a JSON file to a CSV file
 * @param input_file - The JSON file to read
 * @param output_file - The CSV file to write
 */
function fromJSONtoCSV(input_file: string, output_file: string): void {
  fs.readFile(input_file, 'utf-8', (err, data) => {
    if (err) {
      console.log(`Error reading file ${input_file}. The error is: `, err);
      return;
    }
    const jsonData = JSON.parse(data);
    const headers = Object.keys(jsonData[0]).join(',');
    console.log(headers);
    let csv = `${headers}\n`;
    for (const subobject of jsonData) {
      csv += Object.values(subobject).join(',') + '\n';
    }
    fs.writeFile(output_file, csv, err => {
      if (err) {
        console.log(`Error writing file ${output_file}. The error is: `, err);
        return;
      }
      console.log(`The file ${output_file} has been saved!`);
    })
  });

}


/**
 * Main function
 */
function main() {
  if (process.argv.length < 4) {
    console.log('Use: node fromJSONtoCSV.js <input_file> <output_file>');
    process.exit(1);
  }
  fromJSONtoCSV(process.argv[2], process.argv[3]);
}

main();