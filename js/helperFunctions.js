'use strict';

function getTemplateScriptFromElement(elementId) {
  return document.getElementById(elementId).innerHTML.trim();
}

function compileTemplateWithData(templateScript, data) {
  var template = Handlebars.compile(templateScript);
  return template(data);
}
