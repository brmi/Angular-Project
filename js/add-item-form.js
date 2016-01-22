/**
 * Created by Daniel on 1/22/2016.
 */
(function() {
    function addItemForm (todoModel) {
        var linkFn = function(scope) {
            scope.newItem = '';
            scope.addItem = function(item) {
                todoModel.addItem(item);
                scope.newItem = '';
            }
        };
        return {
            restrict: 'E',
            templateUrl: 'add-item-form.html',
            scope: {},
            link: linkFn
        };
    };
    angular.module('todoApp')
        .directive('addItemForm',
            ['todoModel', addItemForm]);
})();