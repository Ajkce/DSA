let array = [1, 3, 5, 7, 8, 10, 11, 15, 18]

function binarySearch(array, left, right, x){
    let mid = parseInt((left + right) / 2)
    console.log(mid);
    if(array[mid] == x){
        return mid;
    }
    if(x < array[mid]){
        return binarySearch(array, left, mid - 1, x)
    }
    if(x > array[mid]){
        return binarySearch(array, mid + 1, right,  x)
    }
    

}

 console.log(binarySearch(array, 0, array.length, 18))