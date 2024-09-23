// Step 1: Create an array of objects called library with game titles
let library = [
  {
    title: "The Ammy singhl",
    author: "Nindo",
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: "God of loedr",
    author: "usf Studio",
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: "Red black blue",
    author: "Rockstar Games",
    status: {
      own: true,
      reading: false,
      read: false
    }
  }
];

// Step 2: Set the read value for all of them to true using dot notation
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3: Destructure the title from the first game and rename the variable to firstBook
const { title: firstBook } = library[0];

// Step 4: Turn the library object into a JSON string
let libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
