
const Table = require('cli-table3');
const fs = require('fs');

// Read book data from the JSON file
const rawData = fs.readFileSync('books.json');
const books = JSON.parse(rawData);

// Create a new CLI Table
const table = new Table({
  head: ['Title', 'Author', 'Year', 'Price'],
});

// Populate the table with data
books.forEach(book => {
  table.push([book.title, book.author, book.year, book.price]);
});

// Display the table
console.log(table.toString());
