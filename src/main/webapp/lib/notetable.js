(function (angular) {
    "use strict";

    angular.module("groovynotes.notetable", [])
        .directive("notetable", function () {
            return {
                restrict: "E",
                templateUrl: "notetable.html",
                scope: {
                    notes: '='
                }
            };
        })

})(window.angular);
