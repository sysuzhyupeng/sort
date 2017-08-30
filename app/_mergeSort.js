/*
	将数组分成多个长度为2或1的子数组，
	将子数组通过一个新数组的空间排序，
	再通过merge函数合并成更大的有序数组，
	复杂度为nlogn,
	如[5, 3, 2, 1, 4, 8, 0],
	分成[5, 3], [2, 1], [4, 8], [0]
	然后对子数组排序得到
	[3, 5], [1, 2], [4, 8], [0]
	再将局部有序的子数组合并成大数组
	[1, 2, 3, 5]，[0, 4, 8],
	最后得到[0, 1, 2, 3, 4, 5, 8]
*/
function merge(left, right){
	var temp = [];
	while(left.length && right.length){
		if(left[0] < right[0]){
			temp.push(left.shift());
		} else {
			temp.push(right.shift());
		}
	}
	//将剩下的合并
	return temp.concat(left, right);
}
function mergeSort(arr){
	var len = arr.length;
	if(len === 1) return arr;
	var mid = Math.floor(len / 2),
		left = arr.slice(0, mid),
		right = arr.slice(mid);
	return merge(mergeSort(left), mergeSort(right));
}
module.exports = mergeSort;