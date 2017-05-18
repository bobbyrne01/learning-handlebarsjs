var templateScript = document.getElementById('address-template').innerHTML.trim();
console.log(templateScript);

// Compile the template
var template = Handlebars.compile(templateScript);
console.log(template);

// Define our data object
var context = {
  "city": "Dublin",
  "street": "River road",
  "number": "1"
};

// Pass data to the template
var compiledHtml = template(context);

// Add the compiled html to the page
document.getElementById('content-placeholder').innerHTML = compiledHtml;
