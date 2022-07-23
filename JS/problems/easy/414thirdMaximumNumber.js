nums = [3,2,1]  // Output: 1
nums = [2,2,3,1]  // Output: 1

function thirdMax(nums) {
	let [first, second, third] = Array(3).fill(-Infinity);
    for (const n of nums) {
        if ([first, second, third].includes(n)) {
            continue;
        }
        if (n > first) {
            [first, second, third] = [n, first, second];
        } else if (n > second) {
            [second, third] = [n, second];
        } else if (n > third) {
            third = n
        }
    }
    return third === -Infinity ? first : third;
}

console.log(thirdMax(nums))