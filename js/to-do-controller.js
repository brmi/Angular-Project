/**
 * Created by Daniel on 1/22/2016.
 */
(function() {
    function todoController($scope, todoModel) {
        $scope.getItems = todoModel.getItems;
        $scope.removeItem = todoModel.removeItem;
        $scope.checkItem= todoModel.checkItem;
        $scope.isChecked=todoModel.isChecked;
        $scope.isClicked=todoModel.isClicked;
        $scope.isSelected=todoModel.isSelected;
        $scope.isEdit=todoModel.isEdit;
        $scope.editing=todoModel.editing;
    }
    angular.module('todoApp')
        .controller('todoController',
            ['$scope', 'todoModel',  todoController]);
    //todoController.$inject = ['nlp']
})();

(function() {
    function addTodoList($scope, todoModel) {
        $scope.name = 'Item';

        $scope.todoLists = [
            {text: 'Work', done:false},
            {text: 'Social', done:false}
        ];

        $scope.addList = function() {
            $scope.todoLists.push({text:$scope.formAddTodoList, done:false});
            $scope.formAddTodoList = '';
        }
    }
    angular.module('todoApp')
        .controller('addTodoList',
            ['$scope', 'todoModel',  addTodoList]);
})();
