/**
 * Created by Daniel on 1/22/2016.
 */
(function() {
    function todoController($scope, todoModel) {
        $scope.name = 'Byron';
        $scope.getItems = todoModel.getItems;
        $scope.removeItem = todoModel.removeItem;
        $scope.checkItem= todoModel.checkItem;
        $scope.isChecked=todoModel.isChecked;
    }
    angular.module('todoApp')
        .controller('todoController',
            ['$scope', 'todoModel',  todoController]);
})();
