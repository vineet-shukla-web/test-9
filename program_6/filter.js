let arr = [60, 20, 10,30,60, 30];
function removeDuplicates(arr) {
    return arr.filter((item,index) => arr.indexOf(item) === index);
    }
console.log(removeDuplicates(arr));