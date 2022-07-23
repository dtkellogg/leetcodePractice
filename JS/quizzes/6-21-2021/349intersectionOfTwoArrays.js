nums1 = [1,2,2,1], nums2 = [2,2]

var intersection = function(nums1, nums2) {
    return new Set([...nums1].filter((num) => nums2.includes(num)))
};

console.log(intersection(nums1,nums2));