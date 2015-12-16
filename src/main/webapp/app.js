(function (angular) {
    "use strict";

    angular.module('notesApp', [
            'groovynotes.note-service'])

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
            self.tab = 'list';
            self.open = function (tab) {
                if (tab == 'list') {
                    self.fetchNotes();
                }
                self.tab = tab;
            };
        }]);

})(window.angular);

