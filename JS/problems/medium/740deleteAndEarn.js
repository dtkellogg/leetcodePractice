nums = [3,4,2] // Output: 6

var deleteAndEarn = function(nums) { 
        if (nums.length == 0) return 0;
        // convert the problem to house robber problem
        // if you take i, you cannot take i-1 and i+1
        // for this array elements are needed to be re-positioned
        // re-positioning logic
        // 1. take max from given array
        var max = Math.max.apply(Math,nums);
        // 2. create a new array of length max + 1
        var earn = Array.from(Array(max), () => 0);
        // 3. populate elements in new array

        console.log("EARN ARRAY")
        console.log(earn)


        for (var i =0; i < nums.length; i++){
            var index = nums[i];
            earn[index] = (earn[index] == undefined ? 0 : earn[index]) +  nums[i];

            console.log(`i: ${i}, nums[i]: ${nums[i]}, earn[index]: ${earn[index]}`)
            console.log(`earn[index] == undefined: ${earn[index] == undefined}`)
            console.log(earn)
            console.log("--------------------------------")

        }

        console.log(`max: ${max}`)
        console.log("EARN ARRAY")
        console.log(earn)

        //apply robbing principle
        var even_sum = 0;
        var odd_sum = 0;
        for (var i =0; i < earn.length; i++){
            if (i %2 == 0){
                even_sum = Math.max (even_sum + earn[i], odd_sum);
            } else {
                odd_sum = Math.max (odd_sum + earn[i], even_sum);
            }
        }
        return Math.max(odd_sum, even_sum);    
};

console.log(deleteAndEarn(nums))