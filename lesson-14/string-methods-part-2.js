/**
 * Có khá nhiều Methods - Phương thức khi xử lý dữ liệu String trong JS.
 * Dưới đây chúng ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế. (Phần 2)
 * toLowerCase(), toUpperCase(), trim(), replace(), match(regex), search(regex), startWith(), endWith()
 */

// toLowerCase() chuyển đổi tất cả các ký tự thành chữ thường. Không làm thay đổi chuỗi gốc ban đầu.
const str1 = 'NhatQuangDev - Một lập trình viên'
const toLowerCaseResult = str1.toLowerCase()
// console.log('After toLowerCase():', toLowerCaseResult) // Kết quả: nhatquangdev - một lập trình viên

// toUpperCase() chuyển đổi tất cả các ký tự thành chữ hoa. Không làm thay đổi chuỗi gốc ban đầu.
const str2 = 'NhatQuangDev - Một lập trình viên'
const toUpperCaseResult = str2.toUpperCase()
// console.log('After toUpperCase():', toUpperCaseResult) // Kết quả: NHATQUANGDEV - MỘT LẬP TRÌNH VIÊN

// trim() loại bỏ khoảng trắng (space) ở đầu và cuối cùng. Không làm thay đổi chuỗi gốc ban đầu.
const str3 = '       NhatQuangDev - Một lập trình viên        '
const trimResult = str3.trim()
// console.log('After trim():', trimResult) // Kết quả: NhatQuangDev - Một lập trình viên

// replace() thay thế một chuỗi con trong chuỗi ban đầu bằng một chuỗi khác. Nó chỉ thay thế lần xuất hiện đầu tiên, muốn thay thế toàn bộ thì phải dùng biểu thức chính quy (regex) với flag g (global). Không làm thay đổi chuỗi gốc ban đầu.
const str4 = 'Hello World World World'
// const replaceResult = str4.replace('World', 'NhatQuangDev!')
const replaceAllResult = str4.replace(/World/g, 'NhatQuangDev!')
// console.log('After replace():', replaceResult) // Kết quả: Hello NhatQuangDev!

// match() tìm kiếm và trả về một mảng chứa kết quả khớp với biểu thức chính quy (regex) trong chuỗi. Nếu không có kết quả khớp thì trả về null. Chỉ trả về kết quả của lần xuất hiện đầu tiên. Muốn trả về tất cả các kết quả thì dùng flag g (global).
const str5 = 'nhatquangdev developer dev dev dev'
const matchResult = str5.match(/dev/g)
// console.log('After match():', matchResult) // Kết quả: ['dev', 'dev', 'dev', 'dev', 'dev']

// search() tìm kiếm theo đầu vào là một biểu thức chính quy (regex) trong chuỗi và trả về index tại vị trí lần xuất hiện đầu tiên của chuỗi trong regex. Nếu không tìm thấy, nó trả về -1
const str6 = 'nhatquangdev developer dev dev dev'
const searchResult = str6.search(/dev/)
// console.log('After search():', searchResult) // Kết quả: 9

// startsWith() kiểm tra chuỗi có bắt đầu bằng một chuỗi con cụ thể hay không. Trả về true/false
const str7 = 'hello nhatquangdev'
const startWithResult = str7.startsWith('hello')
// console.log('After startWith():', startWithResult) // Kết quả: true

// endsWith() kiểm tra chuỗi có kết thúc bằng một chuỗi con cụ thể hay không. Trả về true/false
const str8 = 'hello nhatquangdev'
const endWithResult = str8.endsWith('dev')
console.log('After endWith():', endWithResult) // Kết quả: true
