var express = require('express');
var router = express.Router();
const soap = require('soap');

router.get('/findPerson', (req, res) => {
    res.render('findPerson', {result: null});
})

router.post('/findPerson', (req, res) => {
    console.log(typeof req.body.personID);
    let id = req.body.personID;
    let FindPersonIn = {id}
    soap.createClient('https://www.crcind.com/csp/samples/SOAP.Demo.CLS?WSDL=1', (err, client) => {
        client.FindPerson(FindPersonIn, (err, FindPersonOut) => {
            result = FindPersonOut.FindPersonResult;
            // console.log(result);
            res.render('findPerson', {
                    result: result
            })
        })
    });
});

router.get('/getByName', (req, res) => {
    res.render('getByName', {result: null});
});

router.post('/getByName', (req, res) => {
    let name = req.body.name;
    let GetByNameIn = {name};
    soap.createClient('https://www.crcind.com/csp/samples/SOAP.Demo.CLS?WSDL=1', (err, client) => {
        client.GetByName(GetByNameIn, (err, GetByNameOut) => {
            result = GetByNameOut.GetByNameResult;
            console.log(result);
            // res.render('getByName', {
            //         result: result
            // })
        })
    });
})

module.exports = router;