const p = __dirname;
const fs = require('fs');

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

var bodyParser = require('body-parser');
app.use(cors());
app.options('*', cors());
app.use(express.static(p+'/public'));

app.use(express.json());

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.post('/save_data', cors(corsOptions), function(req, res) {

let jsn = req.body;
let content = jsn.html;
//console.log(content);

fs.writeFile(p+'/public/content.txt', content, { flag: 'w+' }, err => {});


});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
