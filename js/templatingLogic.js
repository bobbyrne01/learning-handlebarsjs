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
