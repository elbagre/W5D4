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
