/*
	将当前外循环的数，
	插入内循环的有序序列中
*/
function insertSort(arr){
	var len = arr.length;
	for(var i = 1; i < len; i++){
		var temp = arr[i];
		for(var j = i; j >= 0; j--){
			//当j = 0，因为arr[-1]不存在，要做特殊处理
			if(j !== 0 && arr[j-1] > temp){
                arr[j] = arr[j-1];
            } else{
                arr[j] = temp;
                break;
            }
		}
	}
	return arr;
}
module.exports = insertSort;