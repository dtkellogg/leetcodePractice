nums1 = [1,3], nums2 = [2]  // Output: 2.00000

var findMedianSortedArrays = function(nums1, nums2) {
  if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)
  let x = nums1.length
  let y = nums2.length
  let low = 0, high = x
  while(low <= high) {
    const partitionX = (high + low) >> 1
    const partitionY = ((x + y + 1) >> 1) - partitionX
    
    const maxX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1]
    const maxY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1]
    
    const minX = partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX]
    const minY = partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY ]
    
    if(maxX <= minY && maxY <= minX) {
      const lowMax = Math.max(maxX, maxY)
      if( (x + y) % 2 == 1)
        return lowMax
      return (lowMax + Math.min(minX, minY)) / 2
    } else if(maxX < minY) {
      low = partitionX + 1
    } else 
      high = partitionX - 1
  }
};

console.log(findMedianSortedArrays(nums1, nums2))