/**
 * Created by Daniel on 1/22/2016.
 */
(function(){
    function todoModel () {
        var self = this
        this.edit = false
        this.editNum;
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
            var size=self._checkItems.length+1;
            for( i=0; i <= size ;i++){
                if(isChecked(item)){
                    index=self._items.indexOf(item);
                    index1=self._checkItems.indexOf(item);
                    if (index >= 0) {
                        self._items.splice(index, 1);
                        self._checkItems.splice(index1, 1);
                    }
                    console.log(i);
                }
                index=0; index1=0; item=self._checkItems[0];
            }

        };
        this.editorClicked = function(){
            if(self.edit==true){
                self.edit=false;
            }
            else{
                self.edit=true;
            }
        };
        this.isEdit= function(item){
            return self.edit && isChecked(item);
        };
        this.editing= function(oldItem, newItem){
            var index=self._items.indexOf(oldItem);
            self._items[index]=newItem;
            self._checkItems.splice(self._checkItems.indexOf(oldItem), 1);
            self.edit=false;
            console.log(self._checkItems);
            console.log(self._items);
        }
    };
    angular.module('todoApp')
        .service('todoModel', todoModel);
})();