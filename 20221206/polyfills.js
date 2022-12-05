// array
var numbers = [1, 2, 3, 4, 5];
var letters = ['a', 'b', 'c'];

// callback
function plusTwo(num) {
    return num + 2;
}

function print(element) {
    console.log(element)
}

// map polyfill
Array.prototype.mapPolyfill = function (callBack) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      arr.push(callBack(this[i]));
    }
    return arr;
  };

console.log(numbers.mapPolyfill(plusTwo));

// forEach polyfill
Array.prototype.forEachPolyfill = function (callBack) {
    for (var i = 0; i < this.length; i++) {
        callBack(this[i]);
    }
  };

letters.forEachPolyfill(print);

// slice polyfill
Array.prototype.slicePolyfill = function (start, end) {
    var arr = [];
    if (start == undefined && end == undefined) {
        for (var i = 0; i < this.length; i++) {
            arr.push(this[i]);
        }
    } else if (end == undefined) {
        for (var i = start; i < this.length; i++) {
            arr.push(this[i]);
        }
    } else {
        for (var i = start; i < end; i++) {
            arr.push(this[i]);
        }
    }
    return arr;
}

console.log(numbers.slicePolyfill(2,4));