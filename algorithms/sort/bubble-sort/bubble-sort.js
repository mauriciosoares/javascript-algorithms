'use strict';
function swap(array, i1, i2) {
	var cacheI1 = array[i1];
	array[i1] = array[i2];
	array[i2] = cacheI1;
	return array;
}

function bubbleSort(array) {
	for(var i = array.length - 1; i > 0; i--) {
		for(var j = 0; j < i; j++) {
			if(array[j] > array[j + 1]) {
				array = swap(array, j, j + 1);
			}
		}
	}
	return array;
}