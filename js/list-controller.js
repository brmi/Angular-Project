/**
 * Created by Daniel on 1/29/2016.
 */
(function() {
    function listController($scope, todoModel) {
        $scope.getItems = todoModel.getItems;
        $scope.removeItem = todoModel.removeItem;
    }
    angular.module('todoApp')
        .controller('listController',
            ['$scope', 'todoModel',  listController]);
})();