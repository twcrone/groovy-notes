angular.module('notesApp', [])
    .controller('MainCtrl', ['$http', function ($http) {
        var self = this;
        self.notes = [];

        self.fetchNotes = function() {
            $http.get('/api/notes').then(function (resp) {
                self.notes = resp.data;
            }, function (errResp) {
                console.error('Error while fetching notes');
            });
        }

        self.fetchNotes();
        self.tab = 'list';
        self.open = function (tab) {
            if(tab == 'list') {
                self.fetchNotes();
            }
            self.tab = tab;
        };
    }])

    .controller('SubCtrl', ['$http', function ($http) {
        var self = this;
        self.newNote = {};

        self.add = function () {
            console.log('Add...')
            $http.post('/api/notes', {message: self.newNote.message})
                .then(self.fetchNotes).then(function (resp) {
                self.newNote = {};
            });
        };
    }]);
