const express = require("express");
const app = express();
const distUrl = '../client/dist'

app.use(express.static(distUrl));

//监听端口为3000
app.listen(3000, function () {
  console.log(' app listening at http://localhost:3000');
});
