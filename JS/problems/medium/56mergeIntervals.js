intervals = [[1,3],[2,6],[8,10],[15,18], [16,21]] // Output: [[1,6],[8,10],[15,18]]

function merge(intervals) {
  if (!intervals.length) return intervals
  intervals.sort((a, b) => a[0] - b[0])
  var prev = intervals[0]
  var res = [prev]

  console.log("intervals:")
  console.log(intervals)
    console.log("--------------------------------------------------------------------------------------------------")



  for (var curr of intervals) {

    console.log("prev:")
    console.log(prev)
    console.log("curr:")
    console.log(curr)
    console.log("res:")
    console.log(res)
    

    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1])

      console.log("IF")
    } else {
      res.push(curr)
      prev = curr

      console.log("ELSE")
    }

    console.log("prev:")
    console.log(prev)
    console.log("res:")
    console.log(res)
    

    console.log("----------------------------------------------------------------")
  }
  return res
}

// same as above w/o comments
function merge(intervals) {
  if (!intervals.length) return intervals
  intervals.sort((a, b) => a[0] - b[0])
  var prev = intervals[0]
  var res = [prev]

  for (var curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1])
    } else {
      res.push(curr)
      prev = curr
    }
  }
  return res
}















////////////////////////////////////////////////////////////////
// PRACTICE

console.log(merge(intervals))