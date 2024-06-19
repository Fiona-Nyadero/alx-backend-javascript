const fs = require('fs');

/**
 * Counts the number of students in each field based on the content of a file.
 *
 * @param {string} path - The path to the file containing student data.
 * @throws {Error} Throws an error if the file cannot be read.
 */
function countStudents(path) {
    try {
        // Read the file content synchronously as a UTF-8 encoded string
        const data = fs.readFileSync(path, 'utf8');

        // Split the file content into lines
        const lines = data.split('\n');

        // Filter out empty lines and split each line into fields
        const students = lines.filter(line => line.trim() !== '').map(line => line.split(','));

        // Create an object to store students grouped by their field
        const fields = {};

        for (const student of students) {
            // Destructure the array to get firstName and field
            const [firstName, field] = student;

            // Create field if doesn't exist in the object
            if (!fields[field]) {
                fields[field] = [];
            }

            // Add the student's first name to the corresponding field
            fields[field].push(firstName);
        }

        // Log the total number of students
        console.log(`Number of students: ${students.length}`);

        // Log the number of students in each field and their names
        for (const [field, names] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        // Throw error message if the file cannot be read
        throw new Error('Cannot load the database');
    }
}

// Export the function
module.exports = countStudents;
