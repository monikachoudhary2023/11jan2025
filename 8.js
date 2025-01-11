// const a=[1,2,3];
// const b=[4,5,6];
// const c= [...a, ...b];
// console.log(c)
function addArray(a,b){
    let result =a.concat(b);
    return result;
}
console.log(addArray([1,2,3],[4,5,6]));
