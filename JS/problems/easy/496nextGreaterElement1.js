nums1 = [4,1,2], nums2 = [1,3,4,2]

var nextGreaterElement = function(nums1, nums2) {
    let output = [...nums1]

    nums1.map((num) => {
        let indexInNums2 = nums2.indexOf(num)

        for(let i = indexInNums2; i < nums2.length - 1; i++) {
            if (nums2[i] > num) output[i] = nums2[i]
        }
        console.log(output)
        console.log(`nums1[nums1.indexOf(num)]: ${nums1[nums1.indexOf(num)]}`)
        console.log(`output[nums1.indexOf(num)]: ${output[nums1.indexOf(num)]}`)

        if(nums1[nums1.indexOf(num)] === output[nums1.indexOf(num)]) output[nums1.indexOf(num)] = -1

    })

    return output
};


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(nextGreaterElement(nums1, nums2))