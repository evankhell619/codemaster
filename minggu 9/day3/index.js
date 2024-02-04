import bcrypt from "bcrypt";

// const bcryptRound = 10;
// const password = "password";
// bcrypt.hash(password, bcryptRound, (err, hash) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(hash);
// });

const pass = "pass";
const hashPass = bcrypt.hashSync(pass, 4);
// console.log(hashPass);

//compare
const check = bcrypt.compareSync("passss", pass);
console.log(check);
