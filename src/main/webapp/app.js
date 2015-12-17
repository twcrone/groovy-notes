(function (angular) {
    "use strict";

    angular.module('notesApp', [
            'groovynotes.note-service',
            'groovynotes.notetable'])

        .constant('URL', '/api/notes')

        .controller('MainCtrl', ['noteService', function (noteService) {
            var self = this;
            self.notes = [];

            self.fetchNotes = function () {
                noteService.findAll().then(function (notes) {
                    self.notes = notes;
                });
            };

            self.fetchNotes();
        }]);

})(window.angular);

