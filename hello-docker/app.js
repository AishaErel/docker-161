console.log("Hello Docker");


console.log("Running Python code:");
const { spawnSync } = require('child_process');
const pythonProcess = spawnSync('python3', ['-c', 'print("Hello Docker from Python")']);
console.log(pythonProcess.stdout.toString());




//Comments
//We will be using child_process which is a module of Node.js which is basically for creating and managing child processes
//We will use "spawnSync" method from this module which allows us to run external commands or programs such as (Python) synchronously
//With this way, Node.js can execute Python scripts, allowing the two to work together within the same application
