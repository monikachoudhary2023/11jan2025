function findMinMax(num){
    if(num.length === 0){
        return null;
    }
   return [Math.min(...num), Math.max(...num)];

}
console.log(findMinMax([1,2,3,4,4,6,8,7]));