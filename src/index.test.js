import { capitalize, calculator, reverseString, caesarCipher, analyzeArray } from "./index.js";

test('uppercase', () => {
  expect(capitalize("john")).toBe("John");
});


test('add', () => {
  expect(calculator.add(2, 2)).toBe(4);
})

test('subtract', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
})

test('multiply', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
})

test('divide', () => {
  expect(calculator.divide(2, 2)).toBe(1);
})

test('reverse', () => {
  expect(reverseString("abc")).toBe("cba");
})

test('caesar', () => {
  expect(caesarCipher("Abc, cd", 1)).toBe("Bcd, de");
})

test('analyze', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6});
})
