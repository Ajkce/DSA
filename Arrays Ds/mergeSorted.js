function mergeSorted(arr1, arr2){
    const arr3 = [...arr1, ...arr2]
    const sortArr = arr3.sort((a, b) => {
        if(a > b){
            return +1;
        }if(a < b){
            return -1
        }
    })
    return sortArr
}

console.log(mergeSorted([0, 1, 5, 30], [4, 6, 9]));