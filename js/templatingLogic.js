var addressTemplateScript = document.getElementById('address-template').innerHTML.trim();
var addressTemplate = Handlebars.compile(addressTemplateScript);
var addressContext = {
  "city": "Dublin",
  "street": "River road",
  "number": "1"
};
var addressCompiledHtml = addressTemplate(addressContext);
document.getElementById('address-content-placeholder').innerHTML = addressCompiledHtml;

var expressionsTemplateScript = document.getElementById('expressions-template').innerHTML.trim();
var expressionsTemplate = Handlebars.compile(expressionsTemplateScript);
var expressionsContext = {
  "description": {
    "escaped": "Using {{}} brackets will result in escaped HTML:",
    "unescaped": "Using {{{}}} will leave the context as it is:"
  },
  "example": "<button> Hello </button>"
};
var expressionsCompiledHtml = expressionsTemplate(expressionsContext);
document.getElementById('expressions-content-placeholder').innerHTML = expressionsCompiledHtml;

var contextTemplateScript = document.getElementById('example-template').innerHTML.trim();
var contextTemplate = Handlebars.compile(contextTemplateScript);
var contextData = {
  people: [
    { firstName: 'Homer', lastName: 'Simpson' },
    { firstName: 'Peter', lastName: 'Griffin' },
    { firstName: 'Eric', lastName: 'Cartman' },
    { firstName: 'Kenny', lastName: 'McCormick' },
    { firstName: 'Bart', lastName: 'Simpson' }
  ]
};
var contextCompiledHtml = contextTemplate(contextData);
document.getElementById('context-content-placeholder').innerHTML = contextCompiledHtml;

Handlebars.registerHelper('capitalize', function(str){
  str = str || '';
  return str.slice(0,1).toUpperCase() + str.slice(1);
});
var helperTemplateScript = document.getElementById('built-in-helpers-template').innerHTML.trim();
var helperTemplate = Handlebars.compile(helperTemplateScript);
var helperContext = {
  animals:[
    {
      name: "cow",
      noise: "moooo"
    },
    {
      name: "cat",
      noise: "meow"
    },
    {
      name: "fish",
      noise: ""
    },
    {
      name: "farmer",
      noise: "Get off my property!"
    }
  ]
};
var helperCompiledHtml = helperTemplate(helperContext);
document.getElementById('content-placeholder').innerHTML = helperCompiledHtml;
