let a = [1, 2, 3, 3, 3, 2, 1, 3, 4, 2, 5, 5];

function quchong(arr){
    for (let i=0; i<arr.length; ++i){
        for (let j=i+1; j<arr.length; ++j){
            if (arr[i] == arr[j]){
                arr.splice(j,1);
                //此时删除了该元素后，后面元素会自动补位。但不会检查补位的元素，所以要自减j
                j--;
            }
        }
    }
}
quchong(a);
console.log(a);

