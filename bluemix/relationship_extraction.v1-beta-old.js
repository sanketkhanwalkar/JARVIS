'use strict';

var watson = require('watson-developer-cloud');

var relationship_extraction = watson.relationship_extraction({
  username: '260764c8-81ae-4b42-8fdd-ff417233a4d4',
  password: 'HdE56JeTkth7',
  version: 'v1-beta'
});

relationship_extraction.extract({
  text: 'I went to the neighborhood of Cabbage Town at around 11:30 PM last night. We parked our car outside a bar. The roads were all deserted there. After we came out of the bar at around 1 AM, we saw that the window panes had been broken using a brick. Also, my laptop was missing from my car.',
  dataset: 'ie-en-news' },
  function (err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
});