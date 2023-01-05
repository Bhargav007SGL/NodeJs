const bcrypt = require("bcrypt");

async function encryption(myPlaintextPassword, saltRounds) {
  const myHashed = await new Promise((resolve, reject) => {
    bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
      resolve(hash);
    });
  });
  return myHashed;
}

async function decryption(password, hashedPassword) {
  const result = await new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, function (err, result) {
      resolve(result);
    });
  });
  return result;
}

async function main() {
  try
  {  
  const hashedPassword = await encryption("wankda", 5);
  const result = await decryption("wankda", hashedPassword);
  console.log(result);
  }
  catch(e){
    console.log(e);
  }
}

main();
