height = [1,8,6,2,5,4,8,3,7] // Output: 49

// O(n) time and constant space:
// by having a left and right pointer, and moving these pointers inward.
const maxArea = (height) => {
	let result = 0,
		left = 0,
		right = height.length - 1;

	while (left < right) {
		let smallestSide = Math.min(height[left], height[right]);
		let area = (right - left) * smallestSide;

        console.log(`left: ${left}, right: ${right}, smallestSide: ${smallestSide}, area: ${area}`)

		if (area > result) result = area;

		if (height[left] < height[right]) left++;
		else right--;
	}

	return result;
};

// same thing as above, just w/o comments
// const maxArea = (height) => {
// 	let result = 0,
// 		left = 0,
// 		right = height.length - 1;

// 	while (left < right) {
// 		let smallestSide = Math.min(height[left], height[right]);
// 		let area = (right - left) * smallestSide;
// 		if (area > result) result = area;
// 		if (height[left] < height[right]) left++;
// 		else right--;
// 	}

// 	return result;
// };

// PRACTICE

const maxArea = (height) => {
	let res = 0,
		left = 0,
		right = height.length - 1;

	while(left < right) {
		let smallestSide = Math.max(height[left], height[right]),
			area = (right - left) * smallestSide;
		if(res < area) res = area;
		if(height[left] < height[right]) left++
		else right--
	}
	
	return res
}

console.log(maxArea(height))