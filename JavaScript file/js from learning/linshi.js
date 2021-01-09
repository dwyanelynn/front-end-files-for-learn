let a = [5, 4, 3, 2, 1]
function findPos(arr, low, high) {
    let val = arr[low]
    while (low < high) {
        while (low<high && arr[high]>=val) {
            --high
        }
        arr[low] = arr[high]
        while (low<high && arr[low]<=val) {
            ++low
        }
        arr[high] = arr[low]
    }
    arr[low] = val
    return low
}
function QuickSort(arr, low, high) {
    let pos 
    if (low < high) {
        pos = findPos(arr, low, high)
        QuickSort(arr, low, pos-1)
        QuickSort(arr, pos+1, high)
    }
}
QuickSort(a, 0, 4)
console.log(a)