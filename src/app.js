const express = require('express');

const app = express();
const port = 3000;

app.set('port', port);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}).on('error', (err) => {
  console.error('Server error:', err);
});
