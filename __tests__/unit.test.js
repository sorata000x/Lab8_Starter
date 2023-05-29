// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('(123)456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
});

test('123-456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('1234567890 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('abcdefg is not a valid phone number', () => {
    expect(functions.isPhoneNumber('abcdefg')).toBe(false);
});

test('username@domain.com is a valid email.', () => {
    expect(functions.isEmail('username@domain.com')).toBe(true);
});

test('username123@domain.com is a valid email.', () => {
    expect(functions.isEmail('username123@domain.com')).toBe(true);
});

test('username is a valid email.', () => {
    expect(functions.isEmail('username')).toBe(false);
});

test('123 is a valid email.', () => {
    expect(functions.isEmail('123')).toBe(false);
});

test('myUsername is a strong password', () => {
    expect(functions.isStrongPassword('myUsername')).toBe(true);
});

test('user1234 is a strong password', () => {
    expect(functions.isStrongPassword('user1234')).toBe(true);
});

test('123me is not a strong password', () => {
    expect(functions.isStrongPassword('123me')).toBe(false);
});

test('s is not a strong password', () => {
    expect(functions.isStrongPassword('s')).toBe(false);
});

test('12/25/2023 is not a valid date', () => {
    expect(functions.isDate('12/25/2023')).toBe(true);
});

test('1/5/2023 is a valid date', () => {
    expect(functions.isDate('1/5/2023')).toBe(true);
});

test('ab/cd/ef is not a valid date', () => {
    expect(functions.isDate('ab/cd/ef')).toBe(false);
});

test('0/0/0 is not a valid date', () => {
    expect(functions.isDate('0/0/0')).toBe(false);
});

test('#FFF is a hex color', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
});

test('ABC is a hex color', () => {
    expect(functions.isHexColor('ABC')).toBe(true);
});

test('#GGG is not a hex color', () => {
    expect(functions.isHexColor('#GGG')).toBe(false);
});

test('FFFFF is not a hex color', () => {
    expect(functions.isHexColor('FFFFF')).toBe(false);
});
