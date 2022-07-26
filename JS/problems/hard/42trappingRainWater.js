height = [0,1,0,2,1,0,1,3,2,1,2,1]


/** 1) Brute force */
// time O(n^2)
// space O(1)
// function trap(height) {
//   if (height == null || height.length === 0) return 0;

//   let res = 0;
//   for (let i = 0; i < height.length; i++) {
//     let lMax = 0;
//     let rMax = 0;

//     for (let j = 0; j < i; j++) {
//       lMax = Math.max(lMax, height[j]);
//     }
//     for (let j = i + 1; j < height.length; j++) {
//       rMax = Math.max(rMax, height[j]);
//     }

//     console.log(`i: ${i}, lMax: ${lMax}, rMax: ${rMax}`)

//     const water = Math.min(lMax, rMax) - height[i];
//     if (water > 0) res += water;

//     console.log(`water: ${water}`)
//     console.log(`res: ${res}`)
//   }

//   return res;
// }

/** 2) Dynamic programming */
// time O(n)
// space O(n)
// function trap(height) {
//   if (height == null || height.length === 0) return 0;

//   let res = 0;
//   let l = height.length;
//   let lMax = {};
//   let rMax = {};

//   lMax[0] = height[0];
//   for (let i = 1; i < l; i++) {
//     lMax[i] = Math.max(height[i], lMax[i - 1]);
//   }

//   rMax[l - 1] = height[l - 1];
//   for (let i = l - 2; i >= 0; i--) {
//     rMax[i] = Math.max(height[i], rMax[i + 1]);
//   }

//   for (let i = 0; i < height.length; i++) {
//     res += Math.min(lMax[i], rMax[i]) - height[i];
//   }

//   return res;
// }

/** 3) Stack */
// time O(n)
// space O(n)
// function trap(height) {
//   let res = 0;
//   let i = 0;
//   const st = [];

//   while (i < height.length) {
//     while (st.length !== 0 && height[i] > height[st[st.length - 1]]) {
//       const top = st[st.length - 1];
//       st.pop();

//       if (st.length === 0) break;

//       const dist = i - st[st.length - 1] - 1;
//       const h = Math.min(height[i], height[st[st.length - 1]]) - height[top];
//       res += dist * h;
//     }
//     st.push(i);
//     i++;
//   }
//   return res;
// }

/** 🔥🔥🔥 4) Two pointers */
// time O(n)
// space O(1)
function trap(height) {
  if (height == null || height.length === 0) return 0;

  let l = 0;
  let r = height.length - 1;

  let lMax = 0;
  let rMax = 0;

  let res = 0;

  while (l < r) {
    lMax = Math.max(lMax, height[l]);

    if (height[l] < lMax) {
      res += lMax - height[l];
    }
    
    rMax = Math.max(rMax, height[r]);

    console.log(`l: ${l}, r: ${r}, lMax: ${lMax}, rMax: ${rMax}, res: ${res}`);

    
    if (height[r] < rMax) {
      res += rMax - height[r];
    }
    
    height[l] < height[r] ? l++ : r--;


    console.log(`l: ${l}, r: ${r}, lMax: ${lMax}, rMax: ${rMax}, res: ${res}`);
    console.log("----------------------------------------------------------------")
  }

  return res;
}

console.log(trap(height))