/**
 * Created by Daniel on 1/22/2016.
 */
(function(){
    function todoModel () {
        var self = this;
        this.mode;
        this._items = [
            {
                title:'Eat pizza',
                description:'Cheese pizza is the best! but...I do not know if everybody likes it'
            },
            {
                title:'Get dinner',
                description:''
            },
            {
                title: 'Buy a doge',
                description:''
            }
        ];
        this._checkItems=[];
        this.getItems = function() {
            return self._items;
        };
        this.addItem = function(item) {
            if(!item) { return; }
            var object={
                title:item,
                description:''
            }
            self._items.push(object);
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
        //Checks if there are any checked items in the list
        this.isChecked=function(){
            if(self._checkItems.length==0){
                return false;
            }
            else{
                return true;
            }
        };
        //Checks if a certain item is checked
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
        this.isEdit= function(item){
            return this.isSelected(2) && isChecked(item);
        };
        this.editing= function(oldItem, newItem, field){
            var index = self._items.indexOf(oldItem);
            console.log(self._items[index].title);
            if(field=='title'){
                self._items[index].title = newItem;
                console.log(self._items[index].title);
            }
           else if(field=='description'){
                self._items[index].description = newItem;
            }
            self._checkItems.splice(self._checkItems.indexOf(oldItem), 1);
            self.mode = 0;
            console.log(self._checkItems);
            console.log(self._items);
        };
        this.isClicked=function(mode) {
            if(self.mode==mode){
                self.mode=0;
                //alert('hi');
            }else{
                self.mode=mode;
            }
        };
        this.isSelected=function(mode){
            return mode == self.mode;
        }
    };
    angular.module('todoApp')
        .service('todoModel', todoModel);
})();