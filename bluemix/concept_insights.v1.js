'use strict';

var watson = require('watson-developer-cloud');

var concept_insights = watson.concept_insights({
  username: '92ff4a6c-c267-4911-b2b7-f359c99a8c99',
  password: 'd1kbUBUzbQJm',
  version: 'v1'
});

// Annotate Text
var params = {
  user: 'wikipedia',
  graph: 'en-20120601',
  text: 'IBM Watson won the Jeopardy television show hosted by Alex Trebek'
};

// Retrieve the concepts for input text
concept_insights.annotateText(params, function(err, res) {
  if (err)
    console.log(err);
  else {
    console.log('Annotate Text');
    console.log(JSON.stringify(res, null, 2));
  }
});

// Semantic Search
var payload = {
  func: 'semanticSearch',
  ids: [
    '/graph/wikipedia/en-20120601/Software_development_process',
    '/graph/wikipedia/en-20120601/Programming_tool'
  ],
  corpus: 'ibmresearcher',
  user: 'public',
  limit: 5
};

concept_insights.semanticSearch(payload, function(error, results) {
  if (error)
    console.log(error);
  else {
    console.log('Semantic Search');
    console.log(JSON.stringify(results, null, 2));
  }
});