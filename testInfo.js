var request = require("request");
var testID = process.env.TEST_ID
var auth = process.env.SAUCE_RDC_BASIC_AUTH

var options = { method: 'GET',
  url: 'https://app.testobject.com/api/rest/v2/reports/' + testID,
  headers: 
   { 
     Authorization: 'Basic ' + auth 
    } 
  };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  var testResults = JSON.parse(body);
  console.log(testResults);
});