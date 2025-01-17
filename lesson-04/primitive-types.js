/** Nhóm các kiểu dữ liệu nguyên thủy - Primitive Types*/
/**
 * Các giá trị nguyên thủy được lưu trữ trực tiếp trong ngắn xếp (Stack)
 * Khi 1 giá trị nguyên thủy được gán cho 1 biến, giá trị này không thể thay đổi.
 * Khi thay đổi giá trị của biến, một bản sao độc lập của giá trị đó sẽ được tạo ra.
 * Primitive types bao gồm các kiểu phổ biến sau:
 */

//Number: Đại diện cho các số, bao gồm cả số nguyên và số thập phân
let age = 17
let productPrice = 10.99
console.log('age: ', age)
console.log('productPrice: ', productPrice)
console.log('typeof age: ', typeof age)
console.log('typeof productPrice: ', typeof productPrice)
console.log('-------------------------')

//String: Đại diện cho các chuỗi ký tự
let userName = 'Nhat Quang'
console.log('userName: ', userName)
console.log('typeof userName: ', typeof userName)
console.log('-------------------------')

//Boolean: Đại diện cho các giá trị true hoặc false
let isAvailable = true
console.log('isAvailable: ', isAvailable)
console.log('typeof isAvailable: ', typeof isAvailable)
let isFree = false
console.log('isFree: ', isFree)
console.log('typeof isFree: ', typeof isFree)
console.log('-------------------------')

//Null: Đại diện cho một giá trị kiểu 'rỗng' hoặc 'không có gì'
let nullValue = null
console.log('nullValue: ', nullValue)
console.log('typeof nullValue: ', typeof nullValue) //object
console.log('typeof nullValue: ', nullValue === null) //object
//Đây là 1 bug của JS, là yếu tố lịch sử, nếu sử thì ảnh hưởng nhiều thứ khác nên JS không sửa
console.log('-------------------------')

//Undefined: Đại diện cho một biến chưa được gán giá trị
let undefinedValue
console.log('undefinedValue: ', undefinedValue)
console.log('typeof undefinedValue: ', typeof undefinedValue)
console.log('-------------------------')

//Symbol(Xuất hiện từ ECMAScript 6 - ES6): Đại diện cho một giá trị Unique: độc nhất và bất biến, thường được sử dụng làm khóa hoặc id cho các đối tượng - Objects
let unique = Symbol('id-1707-abc-xyz')
console.log('unique: ', unique)
console.log('typeof unique: ', typeof unique)
console.log('-------------------------')
//BigInt (Xuất hiện từ ECMAScript 2020 - ES2020): Đại diện cho các số nguyên có giá trị rất lớn, lớn hơn kiểu Number thông thường ở trên
let bigNumber01 = BigInt(9007199254740991)
let bigNumber02 = 9007199254740991n
console.log('bigNumber01:', bigNumber01)
console.log('typeof bigNumber01: ', typeof bigNumber01)
console.log('bigNumber02:', bigNumber02)
console.log('typeof bigNumber02: ', typeof bigNumber02)
console.log('-------------------------')
