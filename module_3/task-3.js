'use strict';

// const findBestEmployee = function(employees) {
//   const values = Object.values(employees);
//   let moreTasks = values[0];

//   for (let i = 0; i < values.length; i++) {
//     if (values[i] > moreTasks) {
//       moreTasks = values[i];
//     }
//   }
//   return moreTasks;

// };

// const findBestEmployee = function(employees) {
//   const entries = Object.entries(employees);
//   let moreTasks = entries[0][1];
//   for (let j = 0; j < entries.length; j++) {
//     if (entries[j][1] > moreTasks) {
//       moreTasks = entries[j][1];
//     }
//   }
//   return moreTasks;
// };

const findBestEmployee = function(employees) {
  const keys = Object.keys(employees);
  let moreTasks = employees[keys[0]];
  let bestEmployee = keys[0];

  for (let i = 0; i < keys.length; i++) {
    if (employees[keys[i]] > moreTasks) {
      moreTasks = employees[keys[i]];
      bestEmployee = keys[i];
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
