let http = require('http');
let fs = require('fs');
let html = fs.readFileSync('./view/index.html');
let successHtml = fs.readFileSync('./view/login/success.html');

const dbData = {
  name: 'Value',
  email: 'taro@example.com',
  password: 'Hogeh0ge',
};
const keys = Object.keys(data);
const checkData = `${keys[0]}=${data.name}&${keys[1]}=${data.email}&${keys[2]}=${data.password}`;

http
  .createServer(function (req, res) {
    if (req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
      return;
    }
    //POST
    req
      .on('data', function (chunk) {
        chunkData += chunk;
      })
      .on('end', function () {
        let data = chunkData.replace(/%40/g, '@');
        if (data == checkData) {
          console.log('ログイン成功');
          res.end(successHtml);
        } else {
          console.log('ログイン失敗');
          res.end(html);
        }
      });
  })
  .listen(3000);
