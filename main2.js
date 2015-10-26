/* jshint -W083 */

var $scope = {};
(function () {
    var bindClasses = ["name", "color"];
    var attachEvent = function (classNames) {
        classNames.forEach(function (className) {
            var elements = document.getElementsByClassName(className);
            for (var index in elements) {
                elements[index].onkeyup = function () {
                    for (var index in elements) {
                        elements[index].value = this.value;
                    }
                };
            }
            Object.defineProperty($scope, className, {
                set: function (newValue) {
                    for (var index in elements) {
                        elements[index].value = newValue;
                    }
                }
            });

        });
    };
    attachEvent(bindClasses);
})();
