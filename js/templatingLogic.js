'use strict';

var addressContext = {
  'city': 'Dublin',
  'street': 'River road',
  'number': '1'
};
var templateScript = getTemplateScriptFromElement('address-template');
var compiledHtml = compileTemplateWithData(templateScript, addressContext);
document.getElementById('address-content-placeholder').innerHTML = compiledHtml;


var expressionsContext = {
  'description': {
    'escaped': 'Using {{}} brackets will result in escaped HTML:',
    'unescaped': 'Using {{{}}} will leave the context as it is:'
  },
  'example': '<button> Hello </button>'
};
var templateScript = getTemplateScriptFromElement('expressions-template');
var compiledHtml = compileTemplateWithData(templateScript, expressionsContext);
document.getElementById('expressions-content-placeholder').innerHTML = compiledHtml;


var contextData = {
  people: [
    { firstName: 'Homer', lastName: 'Simpson' },
    { firstName: 'Peter', lastName: 'Griffin' },
    { firstName: 'Eric', lastName: 'Cartman' },
    { firstName: 'Kenny', lastName: 'McCormick' },
    { firstName: 'Bart', lastName: 'Simpson' }
  ]
};
var templateScript = getTemplateScriptFromElement('example-template');
var compiledHtml = compileTemplateWithData(templateScript, contextData);
document.getElementById('context-content-placeholder').innerHTML = compiledHtml;


var helperContext = {
  animals:[
    {
      name: 'cow',
      noise: 'moooo'
    },
    {
      name: 'cat',
      noise: 'meow'
    },
    {
      name: 'fish',
      noise: ''
    },
    {
      name: 'farmer',
      noise: 'Get off my property!'
    }
  ]
};
Handlebars.registerHelper('capitalize', function(str){
  str = str || '';
  return str.slice(0,1).toUpperCase() + str.slice(1);
});
var templateScript = getTemplateScriptFromElement('built-in-helpers-template');
var compiledHtml = compileTemplateWithData(templateScript, helperContext);
document.getElementById('content-placeholder').innerHTML = compiledHtml;


var blockHelperContext = {
  'code': 'up up down down left right left right b a select start'
};
Handlebars.registerHelper('uppercase', function(options) {
  return options.fn(this).toUpperCase();
});
var templateScript = getTemplateScriptFromElement('block-expressions-template');
var compiledHtml = compileTemplateWithData(templateScript, blockHelperContext);
document.getElementById('block-helpers-placeholder').innerHTML = compiledHtml;
