/* jshint -W083 */
// ** globals ** //

var scope = {};
var classNamesArray = ['name', 'color'];

// ** functions ** //


function getElements() {
  /*
  1. iterate through classNamesArray
  2. grab dom elements associated with each class
  3. return an array of dom elements
  */
  var outputArray = [];
  for (var i = 0; i < classNamesArray.length; i++) {
    outputArray.push(document.getElementsByClassName(classNamesArray[i]));
  }
  return outputArray;
}


function domBinding(elements) {
  /*
  1. iterate through the dom elements
  2. attach onkeyup event to each
  3. perform *some* sort of action to bind the two inputs
  */
  for (var i = 0; i < elements.length; i++) {
    elements[i].onkeyup = function () {
      for (var j = 0; j < elements.length; j++) {
        elements[j].value = this.value;
      }
    };
  }
}

function modelBinding(elements) {
  /*
  1. iterate through the class names
  2. Object.defineproperty(object, property, config object w/ setter function)
  3. end goal: scope.name = "something" => updates the DOM
  */
  for (var i = 0; i < classNamesArray.length; i++) {
    Object.defineProperty(scope, classNamesArray[i], {
      // what here?
      set: function(newValue) {
        for (var i = 0; i < elements.length; i++) {
          elements[i].value = newValue;
        }
      }
    });
  }
}

// ** function calls ** //

// refactor with for one for loop that iterates through the class names
  // call domBinding
  // call modelBinding

var domElements = getElements();
domBinding(domElements[0]);
domBinding(domElements[1]);
modelBinding(domElements[0]);
