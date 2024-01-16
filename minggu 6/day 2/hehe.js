// const arr = [3, 5, 6, 7, 1, 4, 8];
const card = ["7H", "2D", "QD", "10S", "3C", "8H"];
let cok = card.length - 1;

function sorting(card) {
  for (i = 0; i < cok; i++) {
    let swap = false;

    for (let j = 0; j < cok - i - 1; j++) {
      if (card[j] > card[j + 1]) {
        let temp = card[j];
        card[j] = card[j + 1];
        card[j + 1] = temp;
        swap = true;
      }
    }
  }
  return card;
}

console.log("After sorting: ", sorting(card));
