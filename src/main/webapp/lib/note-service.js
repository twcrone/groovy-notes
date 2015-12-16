(function (angular) {
    "use strict";

    var module = angular.module('groovynotes.note-service', []);

    module.service('noteService', function(URL, $http) {
        var self = this;

        function extractData(v) {
            return v.data;
        };

        this.findAll = function() {
            return $http.get(URL)
                .then(extractData);
        };

        this.save = function(message) {
            return $http.post(URL, { message: message });
        };
    });

})(window.angular);
