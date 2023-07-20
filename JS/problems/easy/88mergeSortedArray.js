nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3  // Output: [1,2,2,3,5,6]

var merge = function (nums1, m, nums2, n) {
  var len = m + n;
  m--;
  n--;
  while (len--) {
    if (n < 0 || nums1[m] > nums2[n]) {
      nums1[len] = nums1[m--];
    } else {
      nums1[len] = nums2[n--];
    }
  }
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

var merge = function (nums1, m, nums2, n) {
}

console.log(merge(nums1, m, nums2, n))