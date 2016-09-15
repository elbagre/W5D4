function range (start, end) {
  if (end < start) { return []; }
  if (end === start) { return [end]; }
  let rec_range = range(start + 1, end);
  return [start].concat(rec_range);
}

console.log(range(1, 10));

function exp(base, power) {
  if (power === 0) { return 1; }
  let prev_prod = exp(base, power - 1);
  return base * prev_prod;
}

console.log(exp(2, 3));

function exp2(base, power) {
  if (power === 0) { return 1; }
  if (power === 1) { return base; }

  if (power % 2 === 0) {
    let prev_prod = exp(base, power/2);
    return prev_prod * prev_prod;
  } else {
    let prev_prod = exp(base, (power-1)/2);
    return base * prev_prod * prev_prod;
  }
}

console.log(exp2(2, 3));
console.log(exp2(3, 4));

console.log("First Fibs");

function first_fibs(n) {
  if (n === 1) { return [0]; }
  if (n === 2) { return [0, 1]; }
  let prev_fibs = first_fibs(n-1);
  prev_fibs.push(
    prev_fibs[prev_fibs.length - 1] + prev_fibs[prev_fibs.length - 2]
  );
  return prev_fibs;
}

console.log(first_fibs(5));

function bsearch(arr, target) {
  // console.log(arr);

  if (arr.length === 0)  return null;

  let mid = Math.floor(arr.length / 2);
  // console.log(`mid = ${mid}`);
  // console.log(`arr[mid] = ${arr[mid]}`);
  // console.log(`target = ${target}`);

  if (arr[mid] === target) { return mid; }

  if (target > arr[mid]) {
    rsearch = bsearch(arr.slice(mid + 1), target);
    if (rsearch === null ) { return null; }
    return mid + 1 + rsearch;
  } else {
    return bsearch(arr.slice(0, mid), target);
  }
}

// console.log("bsearch");
// bArry = [1, 3, 5, 6, 6, 9, 12, 15];
// console.log(bsearch(bArry, 15));
//
// console.log(bsearch([1, 2, 3], 1) );
// console.log(bsearch([2, 3, 4, 5], 3) );
// console.log(bsearch([2, 4, 6, 8, 10], 6) );
// console.log(bsearch([1, 3, 4, 5, 9], 5) );
// console.log(bsearch([1, 2, 3, 4, 5, 6], 6) );
// console.log(bsearch([1, 2, 3, 4, 5, 6], 0) );
// console.log(bsearch([1, 2, 3, 4, 5, 7], 6) );

const sorter = function(a,b) {
  if (a.length < b.length) {
    return -1;
  }
  if( a.length > b.length) {
    return 1;
  }
  return 0;
};

// {|a, b| a.length <==> b.length }

function bestChange (amt, coins) {
  if (amt === 0) {return []; }

  let wallets = [];

  coins.forEach(function (coin) {
    if (coin > amt) { return; }
    let new_coins = coins.filter(function(x) { return x <= coin;});
    wallets.push([coin].concat(bestChange(amt - coin, new_coins)));

  });

  return wallets.sort(sorter)[0];
}


console.log(bestChange(14,[10,7,1]));

console.log("merge sort");

function mergeSort (arr) {
  console.log(arr);
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  merged = merge(
    mergeSort(left),
    mergeSort(right)
  );

  return merged;
}

function merge(left, right) {
  console.log(`left is ${left}`);
  console.log(`right is ${right}`);
  merged = [];

  while (left.length >= 1 && right.length >= 1) {
    if (left[0] > right[0]) {
      merged.push(right.shift());
    } else {
      merged.push(left.shift());
    }
  }

  merged = merged.concat(left);
  merged = merged.concat(right);

  console.log(`merged is ${merged}`);

  return merged;
}


let unsortedArr = [3, 1, 2, 6, 2, 9, 5, 7, 3, 1];

// console.log(mergeSort(unsortedArr));

console.log("subsets");

Array.prototype.subsets = function() {
  // console.log(`this is ${this}`);
  if (this.length === 0) return [[]];

  prev_subsets = this.slice(0, -1).subsets();
  // console.log(`this.slice(1) is ${this.slice(0, -1)}`);
  // console.log(`prev is ${prev_subsets}`);

  new_subsets = [];
  extra_el = this[this.length - 1];
  prev_subsets.forEach( function(el) {
    // console.log(`el is ${el}`);
    // console.log(`this[0] is ${this[0]}`);

    new_subsets = new_subsets.concat(
      [el.concat([extra_el])]
    );
  });

  // console.log(`prev is ${prev_subsets}`);
  // console.log(`new is ${new_subsets}`);

  return prev_subsets.concat(new_subsets);

};

console.log([2,3,4].subsets());
