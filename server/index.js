const app = require('./api/app');
const port = 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});