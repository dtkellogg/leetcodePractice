items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"  // Output: 1

const map = {
  'type': 0,
  'color': 1,
  'name': 2
}

const countMatches = (items, key, value) => items.filter(i => i[map[key]] == value).length


////////////////////////////////////////////////////////////////////////////////
// PRACTICE

console.log(countMatches(items, ruleKey, ruleValue))