/**
 * Có khá nhiều Methods - Phương thức khi xử lý dữ liệu String trong JS.
 * Dưới đây chúng ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế. (Phần 1)
 * CharAt(), concat(), includes(), indexOf(), slice(), split(), substring()
 */

// charAt() trả về ký tự tại một vị trí cụ thể trong chuỗi. Vị trí bắt từ 0. Trả về string rỗng nếu vị trí không tồn tại.
const str1 = 'Hello World'
// console.log(str1.charAt(0)) // H
// console.log(str1.charAt(1)) // e
// console.log(str1.charAt(7)) // o
// console.log(str1.charAt(70)) // ''
// console.log(typeof str1.charAt(70)) // String

// concat() được sử dụng để nối 2 hoặc nhiều chuỗi lại với nhau và trả về một chuỗi mới. Không làm thay đổi chuỗi gốc ban đầu.
const str2 = 'NhatQuangDev'
const separator = ' - '
const str3 = 'Một lập trình viên'
const concatResult = str2.concat(separator).concat(str3)
// console.log('After concat:', concatResult) // NhatQuangDevMột lập trình viên

// includes() kiểm tra xem chuỗi có chứa một chuỗi con cụ thể hay không. Trả về true nếu chuỗi con được tìm thấy, ngược lại trả về false. Có phân biệt chữ hoa và chữ thường.
const str4 = 'NhatQuangDev'
const includesResult = str4.includes('Quang')
// console.log('After includes:', includesResult)

// indexOf() trả về index của lần xuất hiện đầu tiên của chuỗi con trong chuỗi. Nếu chuỗi con không được tìm thấy, nó sẽ trả về -1. Có phân biệt chữ hoa và chữ thường.
const str5 = 'NhatQuangDev'
const indexOfResult = str5.indexOf('Quang')
// console.log('After indexOf:', indexOfResult) // After indexOf: 4

// split() chia chuỗi con thành một mảng các chuỗi con dựa trên 1 ký tự nhân diện. Không làm thay đổi chuỗi gốc ban đầu.
const str6 = 'JS, TS, React, Vue, Angular, NhatQuangDev'
const splitResult = str6.split(', ')
// console.log('After split:', splitResult) // After split: ['JS', 'TS', 'React', 'Vue', 'Angular', 'NhatQuangDev']

// slice() trả về chuỗi con từ một chuỗi gốc ban đầu, từ vị trí startIndex đến endIndex (Không bao gồm endIndex). Không làm thay đổi chuỗi gốc bàn đầu. Nếu chúng ta cố tình để start > end thì slice trả về chuỗi trống.
const str7 = 'JavaScript is fun but not easy'
const sliceResult_1 = str7.slice(0, 10)
const sliceResult_2 = str7.slice(10, 0)
// console.log('After slice() 01: ', sliceResult_1) // Kết quả :JavaScript
// console.log('After slice() 02: ', sliceResult_2) // Kết quả :

// substring() khá giống với slice(): nó cũng trả về một chuỗi con từ chuỗi gốc ban đầu, từ chỉ số startIndex đến endIndex (Không bao gồm endIndex). Tuy nhiên khác với slice() ở 1 điểm : substring() sẽ hoán đổi startIndex và endIndex nếu chúng ta vô tình để startIndex lớn hơn endIndex
const str8 = 'JavaScript is fun but not easy'
const subStringResult_1 = str7.substring(0, 10)
const subStringResult_2 = str7.substring(10, 0)
console.log('After substring() 01: ', subStringResult_1) // Kết quả :JavaScript
console.log('After substring() 02: ', subStringResult_2) // Kết quả :
