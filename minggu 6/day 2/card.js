const card = ["7H", "2D", "QD", "10S", "3C", "8H"];
let n = card.length;

function sortCard(card) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (card[j] > card[j + 1]) {
        let temp = card[j];
        card[j] = card[j + 1];
        card[j + 1] = temp;
      }
    }
  }
}
sortCard(card);
console.log("Sorted card:", card);
