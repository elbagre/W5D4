Array.prototype.uniq = function () {
  let arr = [];
  for (i = 0; i < this.length; i++) {
    if (arr.indexOf(this[i]) === -1) {
      arr.push(this[i]);
    }
  }
  return arr;
};

new_arr = [1, 2, 2, 3, 4, 5, 5, 6];
console.log(new_arr.uniq());

Array.prototype.twoSum = function () {
  let arr = [];

  for (i = 0; i < this.length; i++) {
    for (j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        arr.push([i, j]);
      }
    }
  }
  return arr;
};

let sumArr = [-1, 1, 2, 3, 1, -1];
console.log(sumArr.twoSum());

Array.prototype.myTranspose = function () {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    subArray = [];
    for (let j = 0; j < this.length; j++) {
      subArray.push(this[j][i]);
    }
    arr.push(subArray);
  }
  return arr;
};

let sqArr = [[-1, 1, 2], [3, 1, -1], [4, 8, 9]];
console.log(sqArr.myTranspose());


Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

// sumArr.myEach( (el) => { console.log(2 * el); }
  // );

// sumArr.myEach( function(el) {
//     console.log(el * 2);
//   }
// );

function func(el) {
  return el * 2;
}

sumArr.myEach(func);

Array.prototype.myMap = function (callback) {
  let arr = [];
  this.myEach( (el) => {  arr.push(callback(el));  } );
  return arr;
};

console.log(sumArr.myMap(func));

Array.prototype.myInject = function (callback) {
  let accum = this[0];

  this.slice(1).myEach((el) => accum = callback(accum, el));

  return accum;
};

function _add(acc, el) {
  return acc + el;
}

console.log(sumArr.myInject(_add));


Array.prototype.bubbleSort = function () {

  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        let temp = this[i+1];
        this[i+1] = this[i];
        this[i] = temp;
        sorted = false;
      }
    }
  }
  console.log(this);

};

let unsorted = [5,8,2,6,8,45,2,3,6,-8,2];
unsorted.bubbleSort();


String.prototype.substrings = function() {

  let substringsArr = [];
  for (let startingIndex = 0; startingIndex < this.length; startingIndex++) {
    for (let endingIndex = startingIndex; endingIndex < this.length; endingIndex++) {
      substringsArr.push( this.slice(startingIndex, endingIndex + 1) );
    }
  }
  return substringsArr.uniq();
};


console.log("catacat".substrings());
