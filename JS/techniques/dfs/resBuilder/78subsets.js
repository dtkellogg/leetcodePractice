nums = [1,2,3]  // Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// function subsets(nums) {
// 	const result = [];
// 	dfs([], 0);

// 	function dfs(path, index) {
// 		result.push(path);

        

// 		for (let i = index; i < nums.length; i++) {
// 			console.log(`i: ${i}, nums[i]: ${nums[i]}`)
// 			console.log("path")
//         	console.log(path)
//         	console.log(result)
// 			dfs([...path, nums[i]], i + 1);
// 		}

//         console.log("--------------------------------")
// 	}

// 	return result;
// }

////////////////////////////////
// same as aabove, but w/o comments
// function subsets(nums) {
// 	const result = [];
// 	dfs([], 0);

// 	function dfs(path, index) {
// 		result.push(path);
// 		for (let i = index; i < nums.length; i++) {
// 			dfs([...path, nums[i]], i + 1);
// 		}
// 	}

// 	return result;
// }




////////////////////////////////////////////////////////////////
// Practice

function subsets(nums) {
}

console.log(subsets(nums))