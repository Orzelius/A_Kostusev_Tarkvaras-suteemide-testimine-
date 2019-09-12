const MyFunctions = require("./functions.js");
let sum = MyFunctions.summarize;
let sub = MyFunctions.substract;
let random = MyFunctions.random;


test("test for number", () => {
    const value = random(1, 5);
    expect(value).toBeGreaterThan(1);
    expect(value).toBeLessThan(5);
});

myMock = jest.fn();
myMock
  .mockReturnValueOnce(7)

  
test("test for number", () => {
    const value = myMock(1, 5);
    expect(value).toBe(7);
});

console.log("sum(4, 21)" + sum(4, 21));
console.log("sub(4, 21)" + sub(4, 21));




// test('adds 1 + 2 to equal 3', () => {
//       expect(() => {
//     sum('octopus', 1);
//   }).toThrow();
// });

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

// test('adds 3 + 5 to equal 8', () => {
//     expect(sum(3, 5)).toBe(8);
// });

// test('adds 1 + -5 not to equal 1', () => {
//     expect(sum(1, -5)).not.toBe(1);
// });

// test('adds 100 + 2 to be greater than 100', () => {
//     expect(sum(100, 2)).toBeGreaterThan(100);
// });