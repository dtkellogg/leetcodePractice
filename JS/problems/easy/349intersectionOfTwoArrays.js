nums1 = [1,2,2,1], nums2 = [2,2] // solution: [2]


//  another way (same idea tho):
// function intersection(nums1, nums2) {
//     const set = new Set(nums1);
//     return [...new Set(nums2.filter(n => set.has(n)))];
// }

////////////////////////////////////////////////////////////////
// 🔥🔥🔥

var intersection = function(nums1, nums2) {
    return [...new Set(nums1.filter(value => nums2.includes(value)))]
};

////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(intersection(nums1, nums2));