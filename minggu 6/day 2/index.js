// linear
const arr = ["Alice", "Bob", "Charlie", "David", "Eve"];
const last = arr.lenght;

// function linear() {
//   for (i = 0; i < last; i++)
//     if (arr[i] == [arr]) console.log(`found at index ${i}`);
//     else console.log(`not found in the phone book`);
// }

// function linear(Name) {
//   const index = array.indexOf(Name);
//   if (index !== -1) {
//     console.log(`Ini dia nama kontaknya ${Name}`);
//   } else {
//     console.log(`Maaf, kontak ${Name} tidak ada`);
//   }
// }
// linear("radin");

// binary
arr2 = [
  "Pop Song",
  "Rock Anthem",
  "Jazz Fusion",
  "Indie Ballad",
  "Hip Hop Groove",
];

const bin = (genre) => {
  let start = 0;
  let end = arr2.lenght - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === genre) {
      {
        console.log(`Song ${targetSong} found at index ${mid}`);
      }
    } else if (genre < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
};
