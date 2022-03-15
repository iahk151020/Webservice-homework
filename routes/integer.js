var express = require('express');
var router = express.Router();
const soap = require('soap');

/* GET users listing. */
router.get('/addInteger', function(req, res, next) {
  res.render('addInteger', {result: null})
});


router.post('/addInteger', (req, res) => {
  let Arg1 = req.body.arg1;
  let Arg2 = req.body.arg2;
  let AddIntegerIn = {Arg1, Arg2}
  soap.createClient('https://www.crcind.com/csp/samples/SOAP.Demo.CLS?WSDL=1', (err, client) => {
    client.AddInteger(AddIntegerIn, (err, AddIntegerOut) => {
      console.log(AddIntegerOut);
      res.render('addInteger', {result: AddIntegerOut.AddIntegerResult})
    })
  })
})

router.get('/divideInteger', (req, res) => {
  res.render('divideInteger', {result: null});
})

router.post('/divideInteger', (req, res) => {
  let Arg1 = req.body.arg1;
  let Arg2 = req.body.arg2;
  let DivideIntegerIn = {Arg1, Arg2}
  soap.createClient('https://www.crcind.com/csp/samples/SOAP.Demo.CLS?WSDL=1', (err, client) => {
    client.DivideInteger(DivideIntegerIn, (err, DivideIntegerOut) => {
      console.log(DivideIntegerOut);
      res.render('divideInteger', {result: DivideIntegerOut.DivideIntegerResult})
    })
  })
})

module.exports = router;
