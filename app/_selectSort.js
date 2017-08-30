/*
	假设第一个元素为最小的，
	通过循环找出最小元素，
	同第一个元素交换，
	接着假设第二个元素
*/
function swap(arr, i, j){
	if(typeof i === 'undefined'|| typeof j === 'undefined') return false;
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
function selectSort(arr){
	var len = arr.length;
	for(var i = 0; i < len - 1; i++){
		var minIndex = i,
			minValue = arr[i];
		for(var j = i + 1; j < len; j++){
			if(arr[j] < minValue){
				minValue = arr[j];
				minIndex = j;
			}
		}
		swap(arr, i, minIndex);
	}
	return arr;
}
module.exports = selectSort;