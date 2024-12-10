# Unhandled Asynchronous Errors in Node.js Express Server

This repository demonstrates a common issue in Node.js applications: unhandled errors within asynchronous callbacks.

The `bug.js` file contains an Express.js server with a route that simulates an asynchronous operation.  Sometimes, this operation throws an error.  However, because the error isn't handled within the asynchronous callback, the server crashes without logging a proper error message.

The `bugSolution.js` demonstrates a corrected version using `try...catch` blocks to properly handle the asynchronous error.  This prevents the server from crashing and allows for graceful error handling.

## Running the Code

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `node bug.js` to run the buggy version.
5. Run `node bugSolution.js` to run the corrected version.

Observe the difference in behavior when an error is thrown.