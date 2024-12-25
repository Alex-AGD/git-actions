const add = require('./calculator');

test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toBe(0);
});

test('adds -1 + 1 to equal 0', () => {
    expect(add(-1, 1)).toBe(0);
});

test('adds 2 + 2 to equal 4', () => {
    expect(add(2, 2)).toBe(4);
});

test('adds -2 + -2 to equal -4', () => {
    expect(add(-2, -2)).toBe(-4);
});

test('adds 1.5 + 1.5 to equal 3', () => {
    expect(add(1.5, 1.5)).toBe(3);
});