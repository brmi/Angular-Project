/**
 * Created by Daniel on 1/29/2016.
 */
(function() {
    function listModel(){
        var self =this;
        this._lists=[];
    }
angular.module('todoApp')
    .service('listModel', listModel);
})();