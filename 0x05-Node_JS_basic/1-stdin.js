// Display welcome message
console.log("Welcome to Holberton School, what is your name?");

// Read user input & set to utf8
process.stdin.resume();
process.stdin.setEncoding('utf8');

// Handle user input
process.stdin.on('data', function(data) {
    // Trim the input
    const name = data.trim();

    // Display the user's name back to user
    console.log(`Your name is: ${name}`);

    // End the process after handling input
    process.exit();
});

// Handle process exit
process.on('exit', function() {
    console.log("This important software is now closing");
});
