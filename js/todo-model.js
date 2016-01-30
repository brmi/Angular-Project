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
                description:'Cheese pizza is the best! but...I do not know if everybody likes it',
                check:false,
                color:''
            },
            {
                title:'Get dinner',
                description:'',
                check:false,
                color:''
            },
            {
                title: 'Buy a doge',
                description:'',
                check:false,
                color:''
            }
        ];
        //this._checkItems=[];
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
        //Checks an item
        this.checkItem = function(item){
            var index=self._items.indexOf(item);
            self._items[index].check=!self._items[index].check;
        };
        //Checks if there are any checked items in the list
        this.isChecked=function(){
            for(var i=0;i<self._items.length;i++){
                if(self._items[i].check==true){
                    return true;
                }
            }
            return false;
        };
        //Checks if a certain item is checked
        function isChecked(item){
            var index= self._items.indexOf(item);
            if(self._items[index].check){
                return true;
            }
            return false;
        };
        this.removeItem = function() {
            var index, index1, item=self._items[0];
            var size=self._items.length+1;
            for( i=0; i <= size ;i++){
                if(isChecked(item)){
                    index=self._items.indexOf(item);
                    if (index >= 0) {
                        self._items.splice(index, 1);
                    }
                    console.log(i);
                }
                index=0; index1=0; item=self._items[0];
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
            //self._items[self._items.indexOf(oldItem)].check=!self._items[self._items.indexOf(oldItem)].check;
            self.mode = 0;
            //console.log(self._checkItems);
            console.log(self._items);
        };
        this.isClicked=function(mode) {
            if(self.mode==mode){
                self.mode=0;
                //alert('hi');
            }else{
                self.mode=mode;
                if(mode==3){
                    this.sort();
                }
            }
        };
        this.isSelected=function(mode){
            return mode == self.mode;
        };
        this.sort=function(){
            var todo1, todo2;
            for(var i=0;i<this._items.length;i++){
                todo1=this._items[i].title.split(' ');
                //todo1=nlp.todo1[]
                for(var j=1; j<this._items.length;j++){
                    todo2=this._items[j].title.split(' ');
                    for(var k=0; k<todo1.length;k++){
                        for(var l=0; l<todo2.length;l++){
                            if(todo2[k]==todo2[l]){

                            }
                        }
                    }
                }
            }
        }
    };
    angular.module('todoApp')
        .service('todoModel', todoModel);
})();