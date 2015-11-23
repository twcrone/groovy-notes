angular.module('notesApp', [])
    .controller('MainCtrl', ['$http', function($http) {
        var self = this;
        self.notes = [];

        $http.get('/api/notes').then(function(resp) {
            self.notes = resp.data;
        }, function(errResp) {
            console.error('Error while fetching notes');
        });

        self.tab = 'list';
        self.open = function(tab) {
            self.tab = tab;
        };
  }])

  .controller('SubCtrl', [function() {
    var self = this;
    self.list = [
      {id: 1, label: 'Item 1'},
      {id: 2, label: 'Item 2'}
    ];
    
    self.add = function() {
      self.list.push({
        id: self.list.length + 1,
        label: 'Item ' + self.list.length
      });
    };
  }]);
