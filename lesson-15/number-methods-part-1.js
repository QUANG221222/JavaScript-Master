/**
 * Có khá nhiều Methods - Phương thức khi xử lý dữ liệu Number trong JavaScript.
 * Dưới đây là một số phương thức phổ biến:
 * Phần 1: toFixed(), toPrecision(), toString(), isFinite(), Number.isInteger(), Number.isSafeInteger(), Number.NaN, isNaN()
 */

// toFixed() - Làm tròn một số theo số lượng chữ số thập phân nhất định trước. Kết quả trả về là String và sẽ làm trong lên như trong toán học.
const num1 = 5.126456789
const fixedNum = num1.toFixed(2) // Giữ lại 2 chữ số thập phân sau dấu phẩy
console.log('After toFixed():', fixedNum) // "5.12"
console.log('Type of fixedNum:', typeof fixedNum) // "string";

// toPrecision() - Làm tròn số dựa theo số lượng chữ số lượng chữ số chỉ định trước (bao gồm cả phần số nguyên và thập phân).
const num2 = 123.456
const preciseNum = num2.toPrecision(4) // Làm tròn số 123.456 thành "123.5" với tổng cộng 4 chữ số.
console.log('After toPrecision():', preciseNum) // "123.5"
console.log('Type of preciseNum:', typeof preciseNum) // "string"

// toString(radix) - chuyển đổi một số thành chuỗi với cơ số (radix) được chỉ định trước.
// Danh sách hệ đếm (cơ số) trong toán học
const num3 = 255 //Hệ thập phân
const binaryStr = num3.toString(2) // Chuyển đổi sang hệ nhị phân
const hexStr = num3.toString(16) // Chuyển đổi sang hệ thập lục phân
console.log('Binary representation:', binaryStr) // "11111111"
console.log('Hexadecimal representation:', hexStr) // "ff"

// isFinite() - Kiểm tra xem một giá trị có phải là số hữu hạn hay không.
console.log('isFinite(123):', isFinite(123)) // true
console.log('isFinite(Infinity):', isFinite(Infinity)) // false
console.log('isFinite(-Infinity):', isFinite(-Infinity)) // false
console.log('isFinite("123"):', isFinite('123')) // true, bởi vì "123" sẽ được chuyển đổi thành số 123

// Number.isInteger() - Kiểm tra xem một giá trị có phải là số nguyên hay không.
console.log('Number.isInteger(123):', Number.isInteger(123)) // true
console.log('Number.isInteger(123.456):', Number.isInteger(123.456)) // false
console.log('Number.isInteger(Infinity):', Number.isInteger(Infinity)) // false
console.log('Number.isInteger(-Infinity):', Number.isInteger(-Infinity)) // false
console.log('Number.isInteger("123"):', Number.isInteger('123')) // false, bởi vì "123" là chuỗi

// Number.isSafeInteger() - Kiểm tra xem một giá trị có phải là số nguyên an toàn hay không.
// Một số nguyên an toàn là một số nguyên trong khoảng từ -(2^53 - 1) đến 2^53 - 1.
console.log('Number.isSafeInter(123):', Number.isSafeInteger(123)) // true
console.log('Number.isSafeInteger(9007199254740991):', Number.isSafeInteger(9007199254740991)) // true
console.log('Number.isSafeInteger(9007199254740992):', Number.isSafeInteger(9007199254740992)) // false
console.log('Number.isSafeInteger(Math.pow(2, 53)):', Number.isSafeInteger(Math.pow(2, 53))) // false

// Number.NaN - Đại diện cho giá trị "Not-a-Number" (không phải là số). Thường xuất hiện khi một phép toán số học không thể thực hiện được.
console.log('Number.NaN:', Number.NaN) // NaN
console.log('0/0:', 0 / 0) // NaN, vì phép chia 0 cho 0 không xác định
console.log('parseFloat("abc"):', parseFloat('abc')) // NaN, vì "abc" không thể chuyển đổi thành số
console.log('Number.NaN === NaN:', Number.NaN === NaN) // flalse, vì NaN không bằng với chính nó
console.log('NaN === NaN:', NaN === NaN) // false, vì NaN không bằng với chính nó;
console.log('NaN.toString() === NaN.toString():', NaN.toString() === NaN.toString()) // true, vì cả hai đều là chuỗi "NaN";

// isNaN() - Kiểm tra xem một giá trị có phải là NaN hay không. Lưu ý rằng isNaN() sẽ chuyển đổi giá trị sang số trước khi kiểm tra.
console.log('isNaN(NaN):', isNaN(NaN)) // true
console.log('isNaN("abc"):', isNaN('abc')) // true, vì "abc" không thể chuyển đổi thành số
console.log('isNaN(123):', isNaN(123)) // false, vì 123 là một số
console.log('isNaN("123"):', isNaN('123')) // false, vì "123" có thể chuyển đổi thành số 123
console.log('isNaN(undefined):', isNaN(undefined)) // true, vì undefined không phải là một số
console.log('isNaN(null):', isNaN(null)) // false, vì null được chuyển đổi thành 0
