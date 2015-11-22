angular.module('notesApp', [])
  .controller('MainCtrl', [function() {
    var self = this;
    self.tab = 'first';
    self.open = function(tab) {
      console.log(tab);
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