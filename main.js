// ** globals ** //

var scope = {};
var classNamesArray = ['name'];

// ** functions ** //

//iterate through classNamesArray
  // grab DOM elements associated with each class
  // return an array of DOM elements

function getElements() {
  var outputArray = [];
  for (var i = 0; i < classNamesArray.length; i++) {
    outputArray.push(document.getElementsByClassName(
      classNamesArray[i][0]));
  }
  return outputArray;
}

// iterate through each dom element
// attach onkeyup event to each
// perform *some* sort of action to bind the two inputs

function domBinding(elements) {
  for (var index in elements) {
    elements[index].onkeyup = function () {
      for var(index in elements) {
        elements[index].value = this.value;
      }
    };
  };
}


// ** function calls ** //

var domElement = getElements();
