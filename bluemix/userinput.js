 var prompt = require('prompt');
var a;
  prompt.start();
    console.log('Hello, welcome to J.A.R.V.I.S!');
    console.log('Please enter your crime report:');
  prompt.get(['report'], function (err, result) {
    if (err) { return onErr(err); }
    //console.log('Command-line input received:');
//    console.log('  Report: ' + result.report);
a = result.report;
   // console.log('  Email: ' + result.email);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }