/**
 * Created by Daniel on 1/22/2016.
 */
(function(){
    function todoModel () {
        var self = this;
        this._items = [
            'Eat pizza',
            'Get dinner',
            'Buy a doge'
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
        this.removeItem = function() {
            var index, index1, item=self._items[0];
            for( i=0; i <= self._checkItems.length+1;i++){
                if(isChecked(item)){
                    index=self._items.indexOf(item);
                    index1=self._checkItems.indexOf(item);
                    if (index >= 0) {
                        self._items.splice(index, 1);
                        self._checkItems.splice(index, 1);
                    }
                    console.log(i);
                }
                index=0; index1=0; item=self._checkItems[0];
            }

        };
    };
    angular.module('todoApp')
        .service('todoModel', todoModel);
})();