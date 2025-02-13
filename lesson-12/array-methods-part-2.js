/**
 * Có khá nhiều Methods - Phương thức khi xử lý dữ liệu mảng trong JS.
 * Dưới đây chúng ta sẽ tập trung vào những phương thức quan trọng và được dùng nhiều trong thực tế.
 * Phần 2: concat(), slice(), splice(), every(), findIndex(), toString(), join()
 */

// concat() dùng để nối 2 hoặc nhiều mảng lại với nhau. Không làm thay đổi các mảng gốc mà trả về 1 mảng mới chứa tất cả các phần tử của mảng được nối.
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const concatResult = arr1.concat(arr2)
console.log('After concat(): ', concatResult) //Kết quả: [1, 2, 3, 4, 5, 6]

// slice() trả về một mảng con của mảng ban đầu, từ vị trí startIndex đến endIndex (không bao gồm endIndex). Không làm thay đổi mảng gốc ban đầu.
const arr3 = [1, 2, 3, 4, 5, 6]
const sliceResult = arr3.slice(1, 4)
console.log('After slice(): ', sliceResult) //Kết quả: [2, 3, 4]

// splice() dùng để thay đổi nội dung của mảng bằng cách xóa, thay thế hoặc thêm phần tử mới. Sẽ làm thay đổi mảng gốc ban đầu
const arr4 = [1, 2, 3, 4, 5, 6]
const spliceResult = arr4.splice(2, 3, 'a', 'b', 'c') // Bắt đầu từ vị trí index 2, xóa 3 phần tử [3, 4, 5] và thêm 3 phần tử mới: ['a', 'b', 'c']
console.log('After splice(): ', spliceResult) // Kết quả: [3, 4, 5]
console.log('After splice(): ', arr4) // Kết quả: [1, 2, 'a', 'b', 'c', 6]

// every() kiểm tra xem tất cả các phần tử trong mảng có thõa mãn điều kiện của hàm callback hay không. Trả về true nếu tất cả đều thỏa mãn, ngược lại trả về false.
const arr5 = [1, 2, 3, 4, 5, 6, -1]
// const allPositive = arr5.every((number) => {
//   return number > 0
// })
const allPositive = arr5.every((number) => number > 0)
console.log('After every(): ', allPositive) // Kết quả: true

// findIndex() trả về chỉ số Index của phần tử đầu tiên trong mảng thỏa mãn điều kiện trong hàm callback. Nếu không có phần tử nào thỏa mãn, sẽ trả về -1.
const arr6 = [1, 2, 3, 4, 5, 6]
const findIndexResult = arr6.findIndex((num) => num > 3)
console.log('After findIndex(): ', findIndexResult) // Kết quả: 3

// toString() nối tất cả các phần tử trong mảng thành 1 chuỗi String
const arr7 = [1, 2, 3, 4, 5, 6]
const toStringResult = arr7.toString()
console.log('After toString(): ', toStringResult) // Kết quả: "1,2,3,4,5,6"
console.log('After toString() typeof: ', typeof toStringResult) // Kết quả: "1,2,3,4,5,6"

// join() Nối tất cả phần tử trong mảng thành 1 chuỗi String ( khác với toString() ) ở điểm có thể chỉ định thêm dấu phân cách
const arr8 = [1, 2, 3, 4, 5, 6]
const joinResult = arr8.join(' - ')
console.log('After join(): ', joinResult)
