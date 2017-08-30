/*
	比较相邻的元素。如果第一个比第二个大，就交换他们两个。 
	对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。
	第一次遍历之后，最后的元素是最大数。 
	针对所有的元素重复以上的步骤，除了最后一个。 
*/
function swap(arr, i, j){
	if(typeof i === 'undefined'|| typeof j === 'undefined') return false;
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
function bubbleSort(arr){
	var len = arr.length;
	for(var i = 0; i < len; i++){
		for(var j = 1; j < len - i; j++){
			if(arr[j] < arr[j - 1]){
				swap(arr, j, j - 1);
			}
		}
	}
	return arr;
}
module.exports = bubbleSort;