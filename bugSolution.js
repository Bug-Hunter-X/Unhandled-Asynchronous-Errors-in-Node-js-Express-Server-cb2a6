const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      if (Math.random() < 0.5) {
        res.send('Hello, world!');
      } else {
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.error('Caught an error:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});