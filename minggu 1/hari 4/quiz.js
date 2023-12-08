const fs = require('fs');
const rawData = fs.readFileSync('./quiz.json');
const question = JSON.parse(rawData);


const { log } = require('console')
const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
})

const totalQuest = question.length

let currentQuest = 0
let score = 0

  console.log('Mulai Quiz \n')

const ask = () => {
  if (currentQuest < totalQuest) {
    console.log(question[currentQuest].question)
    rl.question('>', (answer) => {
      if (answer.trim().toLowerCase() == question [currentQuest].answer.trim().toLowerCase()) {
        console.log("Benar")
        score++
        ;
      }else {
        console.log("Salah");
      }
      currentQuest++
      ask()
    })
  }
  else {
    console.log(`Quiz Done , score : ${score}/${totalQuest}`)
    rl.close();
  }
} 
ask()

