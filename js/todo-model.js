/**
 * Created by Daniel on 1/22/2016.
 */
(function(){
    function todoModel () {
        var self = this;
        this._items = [
            'Eat pizza',
            'Get dinner',
            'Buy a dodge'
        ];
        this._checkItems=[];
        this.getItems = function() {
            return self._items;
        };
        this.addItem = function(item) {
            if(!item) { return; };
            self._items.push(item);
        };
        this.checkItem = function(item){
            if(isChecked(item)!=true){
                self._checkItems.push(item);
            }
            else{
                var index = self._checkItems.indexOf(item);
                if(index >= 0) {
                    self._checkItems.splice(index, 1);
                }
            }
            console.log(self._checkItems);
            if(self._checkItems.length==0){
                return false;
            }
            else{
                return true;
            }
        };
        this.isChecked=function(){
            if(self._checkItems.length==0){
                return false;
            }
            else{
                return true;
            }
        };
        function isChecked(item){
            for(var i = 0; i<self._checkItems.length;i++){
                if(self._checkItems[i]==item){
                    return true;
                }
            }
            return false;
        };
        this.removeItem = function(item) {
            var index = self._items.indexOf(item);
            if(index >= 0) {
                self._items.splice(index, 1);
            }
        };
    };
    angular.module('todoApp')
        .service('todoModel', todoModel);
})();