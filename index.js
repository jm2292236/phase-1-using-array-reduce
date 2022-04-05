const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Sum all the assembled batteries by iterating through all the elements in the batteryBatches array
// and passing the accumulated value and the current element (batch) of the array.
// The first iteration, the second argument of the reduce function (0) becomes the initial value
// for the accum argument
const totalBatteries = batteryBatches.reduce((accum, batch) => accum + batch, 0);

// test
//  console.log(totalBatteries);
