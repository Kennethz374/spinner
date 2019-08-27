const spin = ['|','/','-','\\','/','-','\\','|'];
let spin1 = spin + '\n'
let time = 50;
for (let spinner of spin1) {
  time += 100
  setTimeout(() => {
    process.stdout.write(`\r ${spinner}`);
  }, time);
};


//...fill in the rest yourself...