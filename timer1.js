const args = process.argv; // turns the terminal input into a variable
const alarmValues = args.slice(2); // takes off the first 2 useless elements

for (let num of alarmValues) { // loops through the input values
  setTimeout(() => { // setTimeout function
    process.stdout.write('\x07'); // beep sound effect
  }, num * 1000); // input value times 1000 so we get that amount of seconds
}

