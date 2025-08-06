/**
 * Có khá nhiều Methods - Phương thức khi xử lý dữ liệu Number trong JavaScript.
 * Dưới đây là một số phương thức phổ biến:
 * Phần 2: parseFloat(), parseInt(), Number.prototype.value(), isFinite(), Number.MAX_VALUE, Number.MIN_VALUE, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY
 */

// parseFloat() - phân tích một chuỗi và trả về 1 số thực (float). Nó sẽ đọc từ trái sang phải cho đến khi gặp một ký tự không thể phần tích thành số thì dừng lại.
console.log('parseFloat("3.14"):', parseFloat('3.14')) // 3.14
console.log('parseFloat("3.14abc"):', parseFloat('3.14abc')) // 3.14, dừng lại khi gặp ký tự "a"
console.log('parseFloat("abc3.14"):', parseFloat('abc3.14')) // NaN, vì không thể bắt đầu phân tích từ "abc";

// parseInt() - phân tích một chuỗi và trả về 1 số nguyên (integer). Nó cũng đọc từ trái sang phải cho đến khi gặp ký tự không thể phần tích thành số thì dừng lại. Ngoài ra có thể chỉ định hệ cơ số (radix) để phân tích.
console.log('parseInt("42"):', parseInt('42')) // 42
console.log('parseInt("42abc"):', parseInt('42abc')) // 42, dừng lại khi gặp ký tự "a"
console.log('parseInt("abc42"):', parseInt('abc42')) // NaN, vì không thể bắt đầu phân tích từ "abc";
console.log('parseInt("1010", 2):', parseInt('1010', 2)) // 10, phân tích chuỗi "1010" theo hệ nhị phân (base 2)
console.log('parseInt("FF", 16):', parseInt('FF', 16)) // 255, phân tích chuỗi "FF" theo hệ thập lục phân (base 16)

// valueOf() trả về giá trị gốc của đối tượng Number. Thường được sử dụng để trích xuất giá trị số từ một đối tượng Number. Hoặc phổ biến 1 trường hợp nữa là lấy giá trị timestamp của một đối tượng Date.
const numObj = new Number(42)
console.log('numObj:', numObj) // [Number: 42]
console.log('typeof numObj:', typeof numObj) // object

const value = numObj.valueOf()
console.log('value:', value) // 42
console.log('typeof value:', typeof value) // number

console.log('new Date().valueOf():', new Date().valueOf()) // Trả về giá trị timestamp của đối tượng Date
console.log('new Date("2025-01-01").valueOf():', new Date('2025-01-01').valueOf()) // 1735689600000

// Number.MAX_VALUE - đại diện cho giá trị lớn nhất có thể được biểu diễn bằng kiểu dữ liệu Number trong JavaScript. Nếu một số vượt quá giá trị này, nó sẽ trở thành Infinity (vô cực).
const max = Number.MAX_VALUE
console.log('Number.MAX_VALUE:', max) // 1.7976931348623157e+308
console.log('2 * Number.MAX_VALUE:', 2 * max) // Infinity, vì vượt quá giới hạn của kiểu dữ liệu Number
console.log(max - 1 === max) // true (do sự chính xác của số trong JavaScript, 1 quá nhỏ so với giá trị lớn nhất)
console.log(max - max === max) // false, vì 0 không bằng giá trị lớn nhất
console.log('typeof max:', typeof max) // number

// Number.MIN_VALUE là giá trị số dương nhỏ nhất lớn hơn 0 có thể được biểu diễn trong JavaScript. Nó không phải là giá trị nhỏ nhất (negative) mà là giá trị dương nhỏ nhất.
const min = Number.MIN_VALUE
console.log('Number.MIN_VALUE:', min) // 5e-324
console.log('Number.MIN_VALUE / 2:', min / 2) // 0, vì giá trị quá nhỏ;
console.log('typeof min:', typeof min) // number

// Number.POSITIVE_INFINITY - đại diện cho vô cực dương. Nó được sử dụng khi một phép toán vượt quá giới hạn của kiểu dữ liệu Number.
const posInfinity = Number.POSITIVE_INFINITY
console.log('Number.POSITIVE_INFINITY:', posInfinity) // Infinity
console.log('1 / 0:', 1 / 0) // Infinity, vì chia cho 0 sẽ dẫn đến vô cực
console.log('typeof posInfinity:', typeof posInfinity) // number

// Number.NEGATIVE_INFINITY - đại diện cho vô cực âm. Nó được sử dụng khi một phép toán dẫn đến giá trị âm vô hạn.
const negInfinity = Number.NEGATIVE_INFINITY
console.log('Number.NEGATIVE_INFINITY:', negInfinity) // -Infinity
console.log('-1 / 0:', -1 / 0) // -Infinity, vì chia cho 0 sẽ dẫn đến vô cực âm
console.log('typeof negInfinity:', typeof negInfinity) // number
