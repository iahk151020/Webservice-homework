var express = require('express');
var router = express.Router();
const soap = require('soap');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// router.get('', (req, res) => {
//   soap.createClient('https://www.crcind.com/csp/samples/SOAP.Demo.CLS?WSDL=1', (err, client) => {
//     let FindPersonIn = {
//       "id" : "1"
//     }
//     client.FindPerson(FindPersonIn, (err, FindPersonOut) => {
//       res.json(FindPersonOut);
//     })
//   });
// })


module.exports = router;
