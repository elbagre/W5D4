Array.prototype.uniq = function () {
  let arr = [];
  for (i = 0; i < this.length; i++) {
    if (!arr.includes(this[i])) {
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
