// Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
// Output
[null, null, null, 1, -1, null, 1, null, -1]

var MyHashMap = function() {
    this._keys = [];
    this._val = [];
};

MyHashMap.prototype.put = function(key, value) {
    if (this._keys[key] === undefined) {
        this._val.push(value);
        this._keys[key] = this._val.length - 1;
    } else {
      this._val[this._keys[key]] = value;
    }
};

MyHashMap.prototype.get = function(key) {
    if (this._keys[key] === undefined) {
        return -1;
    } else {
      return this._val[this._keys[key]];
    }
};

MyHashMap.prototype.remove = function(key) {
    if (this._keys[key] !== undefined) {
      this._val[this._keys[key]] = undefined;
      this._keys[key] = undefined;
    }
};

console.log()