const removeFromArray = function(arr,item) {
   let arr1 = [...arr];
   const var1 = arr.length;
    for(i=0;i<var1;i++){
        if(arr1[i]==item){
            arr1[i].splice(i,1);
        }
        else
            return arr1;
    }

};

// Do not edit below this line
module.exports = removeFromArray;
