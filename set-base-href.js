const fs = require('fs');
const path = require('path');

// Get the base href from the command line arguments
const baseHref = process.argv[2] || '/';

// Define the path to the index.html file in the dist/landing-page folder
const indexPath = path.join(__dirname, 'dist', 'landing-page', 'browser', 'index.html');

// Read the index.html file
fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading index.html:', err);
    return;
  }

  // Replace the %BASE_HREF% placeholder with the actual base href
  const updatedData = data.replace(/%BASE_HREF%/g, baseHref);

  // Write the updated data back to the index.html file
  fs.writeFile(indexPath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing index.html:', err);
    } else {
      console.log('Successfully updated base href in index.html');
    }
  });
});
