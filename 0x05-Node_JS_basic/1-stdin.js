console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const reader = process.stdin.read();
  if (reader !== null) {
    process.stdout.write(`Your name is: ${reader}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
