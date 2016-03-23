'use strict';
var a;

var watson = require('watson-developer-cloud');
var MonkeyLearn = require('monkeylearn');
var prompt = require('prompt');
  prompt.start();
    console.log('\nHello, welcome to J.A.R.V.I.S!\n');
    //console.log('');
    console.log('Please enter your crime report:');
  prompt.get(['report'], function (err, result) {
    if (err) { return onErr(err); }
    //console.log('  Report: ' + result.report);
console.log("\nThank you for reporting. Let me see if I need any additional details");


var ml = new MonkeyLearn('1e98c9c6fea2aacefcdaa85139610725f42366fe');
var module_id = 'cl_N8BmpbrK';
var text_list = [result.report];
var p = ml.classifiers.classify(module_id, text_list, true);
p.then(function (res) {
  var temp = res.result;
  temp = temp[0];
  if (temp.length>0)
  console.log('\nCrime Prediction:',temp[0].label + ' ' +temp[1].label +'\n');
else
  console.log('\nCrime Prediction:',temp[0].label + '\n');
});

var relationship_extraction = watson.relationship_extraction({
  username: '260764c8-81ae-4b42-8fdd-ff417233a4d4',
  password: 'HdE56JeTkth7',
  version: 'v1-beta'
});

relationship_extraction.extract({
  text: result.report,
  dataset: 'ie-en-news' },
  function (err, response) {

    if (err)
      console.log('error:', err);
    else{
      var temp = response.doc.entities.entity;
    for(var i = 0; i < temp.length; i++)
      {
      console.log(temp[i].type,JSON.stringify(temp[i].mentref[0].text, null, 2));
      }
    }
});


});
    function onErr(err) {
    console.log(err);
    return 1;
  }