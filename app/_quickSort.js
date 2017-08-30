function swap(arr, i, j){
	if(typeof i === 'undefined'|| typeof j === 'undefined') return false;
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
function partition(arr, left, right){
	//原地分区, 将数组分为左小右大
    var pivotValue = arr[right],
    	//最右面设为标准
    	storeIndex = left;
    for(var i = left; i < right; i++){
    	//将所有小于pivotValue放到前面
        if(arr[i] <= pivotValue){
            swap(arr, storeIndex, i);
            storeIndex++;
        }
    }
    //最后将privot放到应有的位置上
    swap(arr, right, storeIndex);
    //返回标杆元素的索引值
    return storeIndex;
}
function sort(arr, left, right){
    if(left > right) return;
    var storeIndex = partition(arr, left, right);
    sort(arr, left, storeIndex - 1);
    sort(arr, storeIndex + 1, right);
}
function quickSort(arr){
	sort(arr, 0, arr.length - 1);
    return arr;
}
module.exports = quickSort;