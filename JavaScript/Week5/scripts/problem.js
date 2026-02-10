// Miltiline template literal to wrap the Comma Separated Values data

var csvData = `0134138,Alan Smith,333-580-2254,70 inches
0134139   ,    Christina    Lee    ,  123            2266347 ,        130 cm
0134140,       Doug         Thomas       , 532           1226157, 158cm
0134141,            John Doe,                519-123-4567         , 160 cm`;

/*
Required output after cleaning:
 
0134138,Alan Smith,333-580-2254,70 inches
0134139,Christina Lee,123-412-6347,51 inches
0134140,Doug Thomas,532-412-6347,62 inches

*/

/* 
STEPS TO SOLVE IT:
1. Split the raw CSV string into an array of rows (one row per employee).
Hint: The data might include Unix (\n) or Windows (\r\n) line endings.

2. For each row, split it into individual fields (ID, Name, Phone Number, Height).
Note: You must handle cases where there is extra or missing whitespace around fields.


3.Remove any unnecessary spaces around the Name field to make it consistent.

4.Using a regular expression, extract the Area Code from the Phone Number field. The phone numbers are stored in two formats:
o	"555-555-5555"
o	"5555555555"


5. o	If the Height is in centimeters (cm), convert it to inches.
Conversion: 1 cm = 0.393701 inches
o	Round the result to the nearest whole number and format it as: "xx inches"
o	If the height is already in inches, leave it as is.
if height is already in inches.. return it... and if not do the above stepsl..


6. Create a new record for each employee with the following fields, separated by commas:
o	ID
o	Name
o	Area Code
o	Height in Inches


7. Combine all the processed records into a new CSV string, with rows separated by \n.
*/

function splitIntoRows(s) {
  return s.split(/\r?\n/);
}

function extractAreaCode(phoneNumber) {
  let matches = phoneNumber.match(/(\(?\d{3}\)?)[\s\-]*\d{3}[\s\-]*\d{4}/);
  if (matches) {
    return matches[1];
  }
  return phoneNumber;
}

function normalizeHeight(height) {
  if (height.endsWith("inches")) {
    return height;
  }

  // Get the height in cm as  Number
  let cm = parseFloat(height);
  let inches = cm * 0.39;
  // xx inches
  return `${Math.round(inches, 0)} inches`;
}
function rowToFields(row) {
  let fields = row.split(/\s*,\s*/);
  // Remove extra space from name
  fields[1] = fields[1].replace(/\s+/, " ");

  // Extract area code from 555-12344555 or 1233333333
  fields[2] = extractAreaCode(fields[2]);

  // Normalize height
  fields[3] = normalizeHeight(fields[3]);
  return fields.join(",");
}

function processCSV(csv) {
  // Step 1: breatk the csv into rows
  let rows = splitIntoRows(csv);

  //Step2: split allrows into array of fields

  //   2.2: By using for loop
  //   let data = [];
  //   for (let i = 0; i < rows.length; i++) {
  //     let row = rows[i];
  //     let fields = rowToFields(row);
  //     data.push(fields);
  //   }
  //   2.3
  //   for (let row of rows) {
  //     let fields = rowToFields(row);
  //     data.push(fields);
  //   }

  // 2.3 By using map function

  let data = rows.map((row) => rowToFields(row));

  return data.join("\n");
  //   return csv;
}

console.log(csvData);
console.log("-------------------------");
let processed = processCSV(csvData);
console.log(processed);
