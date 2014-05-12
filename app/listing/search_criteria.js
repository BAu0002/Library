var module = angular.module('octopus-library');

module.factory('searchCriteria', function() {
  return {
    create: function() {
      var result = {
        text: ''
      };

      result.filter = function(item){
        if (result.text.length === 0) {
          return true;
        }

        var lc = result.text.toLowerCase();
        return item.Name.toLowerCase().indexOf(lc) !== -1 ||
          item.Description.toLowerCase().indexOf(lc) !== -1;
      };

      return result;
    }
  };
});
